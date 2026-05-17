import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IMG } from '../../data/images'
import './AuthSplit.css'

export function AuthSplit({ title, subtitle, children, footerLink, footerLabel }) {
  return (
    <div className="pj-auth">
      <div className="pj-auth__visual" aria-hidden>
        <img src={IMG.authSide} alt="" className="pj-auth__img" />
        <div className="pj-auth__visual-copy">
          <p className="pj-auth__brand">PixelJournal</p>
          <p className="pj-auth__tagline">Colourful blogs, real photos, simple publishing.</p>
        </div>
      </div>
      <div className="pj-auth__panel">
        <motion.div
          className="pj-auth__card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="pj-auth__title">{title}</h1>
          <p className="pj-auth__subtitle">{subtitle}</p>
          {children}
          {footerLink && footerLabel ? (
            <p className="pj-auth__footer">
              <Link to={footerLink}>{footerLabel}</Link>
            </p>
          ) : null}
        </motion.div>
      </div>
    </div>
  )
}
