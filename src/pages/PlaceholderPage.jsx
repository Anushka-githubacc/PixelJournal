import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '../constants/routes'
import { Container } from '../components/ui/Container'
import './PlaceholderPage.css'

export function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="pj-placeholder">
      <Container narrow>
        <motion.div
          className="pj-placeholder__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="pj-placeholder__eyebrow">Coming together</p>
          <h1 className="pj-placeholder__title">{title}</h1>
          <p className="pj-placeholder__subtitle">{subtitle}</p>
          <Link className="pj-placeholder__back" to={ROUTES.HOME}>
            Return home
          </Link>
        </motion.div>
      </Container>
    </div>
  )
}
