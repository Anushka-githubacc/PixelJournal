import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BLOG_CATEGORIES } from '../../constants/categories'
import { ROUTES } from '../../constants/routes'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './CategoryShowcase.css'

export function CategoryShowcase() {
  return (
    <MotionSection className="pj-cats" aria-labelledby="pj-cats-heading">
      <Container>
        <div className="pj-cats__intro">
          <p className="pj-cats__eyebrow">Browse topics</p>
          <h2 id="pj-cats-heading" className="pj-cats__title">
            Explore blogs by category
          </h2>
        </div>

        <div className="pj-cats__mosaic">
          {BLOG_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={`pj-cats__cell pj-cats__cell--${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="pj-cats__card"
                to={`${ROUTES.EXPLORE}?cat=${cat.id}`}
                style={{ '--pj-cat-accent': cat.accent }}
              >
                <span className="pj-cats__card-glow" aria-hidden />
                <span className="pj-cats__card-label">{cat.label}</span>
                <span className="pj-cats__card-copy">{cat.summary}</span>
                <span className="pj-cats__card-go">
                  Step inside
                  <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
