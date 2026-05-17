import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './CreatorsStrip.css'

export function CreatorsStrip({ creators }) {
  return (
    <section className="pj-x-creators" aria-labelledby="pj-x-creators-title">
      <div className="pj-x-creators__head">
        <h2 id="pj-x-creators-title" className="pj-x-creators__title">
          Featured creators
        </h2>
        <Link className="pj-x-creators__see" to={ROUTES.PROFILE}>
          Profiles
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>

      <div className="pj-x-creators__track">
        {creators.map((c, i) => (
          <motion.article
            key={c.id}
            className="pj-x-creators__card"
            style={{ '--pj-cr': c.accent }}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="pj-x-creators__visual">
              <img src={c.portrait} alt="" loading="lazy" />
            </div>
            <p className="pj-x-creators__name">{c.name}</p>
            <p className="pj-x-creators__role">{c.role}</p>
            <p className="pj-x-creators__meta">{c.journals} journals</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
