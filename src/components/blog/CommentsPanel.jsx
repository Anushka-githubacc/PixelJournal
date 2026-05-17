import { useState } from 'react'
import { motion } from 'framer-motion'
import './CommentsPanel.css'

export function CommentsPanel({ comments }) {
  const [draft, setDraft] = useState('')

  return (
    <section className="pj-comments" aria-labelledby="pj-comments-title">
      <h2 id="pj-comments-title" className="pj-comments__title">
        Comments ({comments.length})
      </h2>
      <ul className="pj-comments__list">
        {comments.map((c) => (
          <li key={c.id} className="pj-comments__row">
            <img className="pj-comments__av" src={c.avatar} alt="" width={44} height={44} />
            <div>
              <p className="pj-comments__who">
                <strong>{c.author}</strong> · <span>{c.date}</span>
              </p>
              <p className="pj-comments__text">{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <form
        className="pj-comments__form"
        onSubmit={(e) => {
          e.preventDefault()
          setDraft('')
        }}
      >
        <label className="pj-comments__label" htmlFor="pj-comment-draft">
          Add a comment
        </label>
        <textarea
          id="pj-comment-draft"
          className="pj-comments__ta"
          rows={3}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Share your take — saves locally in this demo."
        />
        <motion.button className="pj-comments__submit" type="submit" whileTap={{ scale: 0.98 }}>
          Post comment
        </motion.button>
      </form>
    </section>
  )
}
