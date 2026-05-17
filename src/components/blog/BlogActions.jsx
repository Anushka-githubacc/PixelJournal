import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bookmark, Link2, Share2 } from 'lucide-react'
import './BlogActions.css'

export function BlogActions() {
  const [saved, setSaved] = useState(false)

  return (
    <div className="pj-blog-actions">
      <motion.button
        type="button"
        className={`pj-blog-actions__btn ${saved ? 'pj-blog-actions__btn--on' : ''}`}
        onClick={() => setSaved((s) => !s)}
        whileTap={{ scale: 0.97 }}
        aria-pressed={saved}
      >
        <Bookmark size={18} strokeWidth={2} />
        {saved ? 'Saved' : 'Save'}
      </motion.button>
      <button type="button" className="pj-blog-actions__btn" aria-label="Copy link">
        <Link2 size={18} strokeWidth={2} />
        Link
      </button>
      <button type="button" className="pj-blog-actions__btn" aria-label="Share">
        <Share2 size={18} strokeWidth={2} />
        Share
      </button>
    </div>
  )
}
