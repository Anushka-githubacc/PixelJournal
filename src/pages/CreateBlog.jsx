import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AssistantPanel } from '../components/createBlog/AssistantPanel'
import { EditorColumn } from '../components/createBlog/EditorColumn'
import { getCategoryById } from '../constants/categories'
import { getWritingAssistant } from '../constants/categoryAssistant'
import './CreateBlog.css'

const DEFAULT_CATEGORY = 'travel'

export default function CreateBlog() {
  const [categoryId, setCategoryId] = useState(DEFAULT_CATEGORY)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [previewMode, setPreviewMode] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState(null)
  const [notice, setNotice] = useState(null)
  const thumbnailObjectUrlRef = useRef(null)

  const assistant = useMemo(() => getWritingAssistant(categoryId), [categoryId])
  const category = getCategoryById(categoryId)

  useEffect(() => {
    return () => {
      if (thumbnailObjectUrlRef.current) {
        URL.revokeObjectURL(thumbnailObjectUrlRef.current)
        thumbnailObjectUrlRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!notice) return undefined
    const timer = window.setTimeout(() => setNotice(null), 4200)
    return () => window.clearTimeout(timer)
  }, [notice])

  const addTag = useCallback((raw) => {
    const next = raw.trim()
    if (!next) return
    setTags((prev) =>
      prev.some((t) => t.toLowerCase() === next.toLowerCase()) ? prev : [...prev, next],
    )
  }, [])

  const removeTag = useCallback((tag) => {
    setTags((prev) => prev.filter((t) => t !== tag))
  }, [])

  const appendBody = useCallback((chunk) => {
    setBody((prev) => `${prev}${chunk}`)
  }, [])

  const pickTitle = useCallback((nextTitle) => setTitle(nextTitle), [])

  const handleThumbnailFile = useCallback((file) => {
    if (thumbnailObjectUrlRef.current) {
      URL.revokeObjectURL(thumbnailObjectUrlRef.current)
    }
    const url = URL.createObjectURL(file)
    thumbnailObjectUrlRef.current = url
    setThumbnailUrl(url)
  }, [])

  const clearThumbnail = useCallback(() => {
    if (thumbnailObjectUrlRef.current) {
      URL.revokeObjectURL(thumbnailObjectUrlRef.current)
      thumbnailObjectUrlRef.current = null
    }
    setThumbnailUrl(null)
  }, [])

  const handleSaveDraft = useCallback(() => {
    setNotice({
      type: 'draft',
      text: 'Draft saved locally — wire Firebase when your backend is ready.',
    })
  }, [])

  const handlePublish = useCallback(() => {
    setNotice({
      type: 'publish',
      text: 'Publish is UI-only for now — connect hosting & persistence next.',
    })
  }, [])

  const previewContent = useMemo(
    () => (
      <>
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt="" className="pj-editor__preview-hero" />
        ) : null}
        <div className="pj-editor__preview-meta">
          <span>{category?.label ?? 'Journal'}</span>
          <span aria-hidden>·</span>
          <span>{tags.length ? tags.join(' · ') : 'Untagged draft'}</span>
        </div>
        <h2>{title.trim() ? title : 'Untitled manuscript'}</h2>
        <div className="pj-editor__preview-body">
          {body.trim()
            ? body
            : 'Your words will settle here — invite a line from the companion panel.'}
        </div>
        {tags.length ? (
          <div className="pj-editor__preview-tags">
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        ) : null}
      </>
    ),
    [thumbnailUrl, category?.label, tags, title, body],
  )

  return (
    <div className="pj-studio">
      <div className="pj-studio__bg" aria-hidden />

      <AnimatePresence>
        {notice ? (
          <motion.div
            key={notice.type}
            className="pj-studio__toast"
            role="status"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {notice.text}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pj-studio__split">
        <EditorColumn
          title={title}
          onTitleChange={setTitle}
          categoryId={categoryId}
          onCategoryChange={setCategoryId}
          tags={tags}
          onAddTag={addTag}
          onRemoveTag={removeTag}
          body={body}
          onBodyChange={setBody}
          previewMode={previewMode}
          onTogglePreview={() => setPreviewMode((open) => !open)}
          thumbnailPreview={thumbnailUrl}
          onThumbnailFile={handleThumbnailFile}
          onThumbnailClear={clearThumbnail}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
          previewContent={previewContent}
        />
        <AssistantPanel
          categoryId={categoryId}
          categoryLabel={category?.label ?? 'Journal'}
          assistant={assistant}
          existingTags={tags}
          onPickTitle={pickTitle}
          onAddTag={addTag}
          onAppendBody={appendBody}
        />
      </div>
    </div>
  )
}
