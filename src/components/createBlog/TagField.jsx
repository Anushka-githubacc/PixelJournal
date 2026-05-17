import { useCallback, useId, useRef } from 'react'
import './TagField.css'

export function TagField({ tags, onAdd, onRemove, placeholder = 'Add tag…' }) {
  const id = useId()
  const inputRef = useRef(null)

  const addFromInput = useCallback(() => {
    const raw = inputRef.current?.value?.trim()
    if (!raw) return
    const parts = raw.split(/[,#]/).map((s) => s.trim()).filter(Boolean)
    parts.forEach((p) => onAdd(p))
    if (inputRef.current) inputRef.current.value = ''
  }, [onAdd])

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addFromInput()
    }
    if (e.key === 'Backspace' && !e.currentTarget.value && tags.length) {
      onRemove(tags[tags.length - 1])
    }
  }

  return (
    <div className="pj-tag-field">
      <label className="pj-tag-field__label" htmlFor={id}>
        Tags
      </label>
      <div className="pj-tag-field__shell">
        {tags.map((t) => (
          <span key={t} className="pj-tag-field__pill">
            <span>{t}</span>
            <button type="button" className="pj-tag-field__x" onClick={() => onRemove(t)} aria-label={`Remove ${t}`}>
              ×
            </button>
          </span>
        ))}
        <input
          id={id}
          ref={inputRef}
          className="pj-tag-field__input"
          type="text"
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onBlur={addFromInput}
        />
      </div>
    </div>
  )
}
