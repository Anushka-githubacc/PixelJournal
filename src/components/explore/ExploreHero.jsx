import { motion } from 'framer-motion'
import './ExploreHero.css'

export function ExploreHero({ mood, categoryKey }) {
  return (
    <section className="pj-x-hero" aria-labelledby="pj-x-hero-title">
      <div className="pj-x-hero__blobs" aria-hidden>
        <motion.span
          className="pj-x-hero__blob pj-x-hero__blob--a"
          style={{ background: `radial-gradient(circle at 35% 35%, ${mood.orbA}, transparent 62%)` }}
          animate={{
            x: [0, 12, -6, 0],
            y: [0, -10, 8, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="pj-x-hero__blob pj-x-hero__blob--b"
          style={{ background: `radial-gradient(circle at 50% 40%, ${mood.orbB}, transparent 58%)` }}
          animate={{
            x: [0, -14, 10, 0],
            y: [0, 14, -8, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="pj-x-hero__blob pj-x-hero__blob--c"
          style={{ background: `radial-gradient(circle at 45% 45%, ${mood.orbC}, transparent 60%)` }}
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="pj-x-hero__inner">
        <motion.p
          key={`${categoryKey}-eyebrow`}
          className="pj-x-hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore · {mood.label}
        </motion.p>
        <motion.h1
          id="pj-x-hero-title"
          key={`${categoryKey}-title`}
          className="pj-x-hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {mood.headline}
        </motion.h1>
        <motion.p
          key={`${categoryKey}-sub`}
          className="pj-x-hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {mood.sub}
        </motion.p>
      </div>
    </section>
  )
}
