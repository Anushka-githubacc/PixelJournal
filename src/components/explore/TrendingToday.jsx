import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPath } from '../../constants/routes'
import './TrendingToday.css'

export function TrendingToday({ items }) {
  return (
    <section className="pj-x-hot" aria-labelledby="pj-x-hot-title">
      <div className="pj-x-hot__head">
        <span className="pj-x-hot__icon" aria-hidden>
          <Flame size={20} strokeWidth={2} />
        </span>
        <div>
          <h2 id="pj-x-hot-title" className="pj-x-hot__title">
            Trending today
          </h2>
          <p className="pj-x-hot__sub">Momentum without leaderboard brutality.</p>
        </div>
      </div>

      <ol className="pj-x-hot__list">
        {items.map((item, i) => (
          <motion.li
            key={item.slug}
            className="pj-x-hot__row"
            style={{ '--pj-hot': item.accent }}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className="pj-x-hot__rank">{String(i + 1).padStart(2, '0')}</span>
            <Link to={blogPath(item.slug)} className="pj-x-hot__link">
              <span className="pj-x-hot__link-title">{item.title}</span>
              <span className="pj-x-hot__heat">{item.heat}</span>
            </Link>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
