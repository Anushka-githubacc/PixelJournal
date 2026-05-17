import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import './ExploreSearch.css'

export function ExploreSearch({ value, onChange, placeholder = 'Search journals, voices, moods…' }) {
  return (
    <motion.div
      className="pj-x-search"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <label className="pj-x-search__label" htmlFor="pj-explore-search">
        Find something worth lingering on
      </label>
      <div className="pj-x-search__shell">
        <span className="pj-x-search__icon" aria-hidden>
          <Search size={20} strokeWidth={2} />
        </span>
        <input
          id="pj-explore-search"
          className="pj-x-search__input"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        <span className="pj-x-search__flare" aria-hidden />
      </div>
    </motion.div>
  )
}
