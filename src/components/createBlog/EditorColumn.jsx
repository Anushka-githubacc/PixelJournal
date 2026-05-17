import { motion } from 'framer-motion'
import {
  Eye,
  EyeOff,
  FileDown,
  SendHorizontal,
} from 'lucide-react'
import { BLOG_CATEGORIES, getCategoryById } from '../../constants/categories'
import { TagField } from './TagField'
import { ThumbnailField } from './ThumbnailField'
import './EditorColumn.css'

export function EditorColumn({
  title,
  onTitleChange,
  categoryId,
  onCategoryChange,
  tags,
  onAddTag,
  onRemoveTag,
  body,
  onBodyChange,
  previewMode,
  onTogglePreview,
  thumbnailPreview,
  onThumbnailFile,
  onThumbnailClear,
  onSaveDraft,
  onPublish,
  previewContent,
}) {
  const active = getCategoryById(categoryId)

  return (
    <div className="pj-editor">
      <div className="pj-editor__wrap">
        <header className="pj-editor__top">
          <div>
            <p className="pj-editor__eyebrow">Studio desk</p>
            <h1 className="pj-editor__h1">Compose a journal entry</h1>
          </div>
          <div className="pj-editor__toolbar">
            <motion.button
              type="button"
              className={`pj-editor__preview ${previewMode ? 'pj-editor__preview--on' : ''}`}
              onClick={onTogglePreview}
              whileTap={{ scale: 0.98 }}
            >
              {previewMode ? <EyeOff size={18} /> : <Eye size={18} />}
              {previewMode ? 'Edit' : 'Preview'}
            </motion.button>
            <motion.button
              type="button"
              className="pj-editor__draft"
              onClick={onSaveDraft}
              whileHover={{ y: -2 }}
            >
              <FileDown size={17} />
              Save draft
            </motion.button>
            <motion.button
              type="button"
              className="pj-editor__publish"
              onClick={onPublish}
              whileHover={{ y: -2 }}
            >
              <SendHorizontal size={17} />
              Publish
            </motion.button>
          </div>
        </header>

        {previewMode ? (
          <motion.article
            className="pj-editor__preview-doc"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {previewContent}
          </motion.article>
        ) : (
          <div className="pj-editor__form">
            <label className="pj-editor__field">
              <span className="pj-editor__label">Title</span>
              <input
                className="pj-editor__title-input"
                type="text"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Name this chapter…"
                autoComplete="off"
              />
            </label>

            <div className="pj-editor__field">
              <span className="pj-editor__label" id="pj-cat-label">
                Category
              </span>
              <div className="pj-editor__cats" role="group" aria-labelledby="pj-cat-label">
                {BLOG_CATEGORIES.map((c) => (
                  <motion.button
                    key={c.id}
                    type="button"
                    className={`pj-editor__cat ${categoryId === c.id ? 'pj-editor__cat--active' : ''}`}
                    style={{ '--pj-cat': c.accent }}
                    onClick={() => onCategoryChange(c.id)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.99 }}
                    layout
                  >
                    <span className="pj-editor__cat-glow" aria-hidden />
                    {c.label}
                  </motion.button>
                ))}
              </div>
              {active ? <p className="pj-editor__cat-note">{active.summary}</p> : null}
            </div>

            <ThumbnailField
              previewUrl={thumbnailPreview}
              onSelectFile={onThumbnailFile}
              onClear={onThumbnailClear}
              accent={active?.accent}
            />

            <TagField tags={tags} onAdd={onAddTag} onRemove={onRemoveTag} />

            <label className="pj-editor__field pj-editor__field--grow">
              <span className="pj-editor__label">Manuscript</span>
              <textarea
                className="pj-editor__body"
                value={body}
                onChange={(e) => onBodyChange(e.target.value)}
                placeholder={
                  active
                    ? `Sketch toward: ${active.summary}`
                    : 'Let the draft breathe — paragraphs welcome, fragments celebrated.'
                }
                rows={18}
              />
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
