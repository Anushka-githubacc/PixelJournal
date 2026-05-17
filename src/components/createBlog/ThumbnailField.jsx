import { useId, useRef } from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, X } from 'lucide-react'
import './ThumbnailField.css'

export function ThumbnailField({ previewUrl, onSelectFile, onClear, accent }) {
  const inputRef = useRef(null)
  const inputId = useId()

  return (
    <div className="pj-thumb">
      <span className="pj-thumb__label">Cover image</span>
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept="image/*"
        className="pj-thumb__hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) onSelectFile(file)
        }}
      />
      <motion.button
        type="button"
        className="pj-thumb__drop"
        style={{ '--pj-thumb-accent': accent }}
        onClick={() => inputRef.current?.click()}
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
      >
        {previewUrl ? (
          <>
            <img src={previewUrl} alt="" className="pj-thumb__img" />
            <span className="pj-thumb__hint">Replace cover</span>
          </>
        ) : (
          <>
            <span className="pj-thumb__icon" aria-hidden>
              <ImagePlus size={26} strokeWidth={1.75} />
            </span>
            <span className="pj-thumb__cta">Drop art here — or click to browse</span>
            <span className="pj-thumb__meta">PNG, JPG · playful crops welcome</span>
          </>
        )}
      </motion.button>
      {previewUrl ? (
        <button type="button" className="pj-thumb__clear" onClick={onClear} aria-label="Remove cover image">
          <X size={18} />
        </button>
      ) : null}
    </div>
  )
}
