import { motion } from 'framer-motion'
import './TrendingTags.css'

export function TrendingTags({ tags, activeQuery, onTagClick }) {
  return (
    <section className="pj-x-tags" aria-labelledby="pj-x-tags-title">
      <h2 id="pj-x-tags-title" className="pj-x-tags__title">
        Trending tags
      </h2>
      <div className="pj-x-tags__rail" role="list">
        {tags.map((tag, i) => {
          const active = activeQuery.toLowerCase().includes(tag.toLowerCase())
          return (
            <motion.button
              key={tag}
              type="button"
              role="listitem"
              className={`pj-x-tags__chip ${active ? 'pj-x-tags__chip--lit' : ''}`}
              onClick={() => onTagClick(tag)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              #{tag}
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
