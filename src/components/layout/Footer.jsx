import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'
import { BLOG_CATEGORIES } from '../../constants/categories'
import { ROUTES } from '../../constants/routes'
import { Container } from '../ui/Container'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="pj-footer">
      <div className="pj-footer__ribbon" aria-hidden />
      <Container>
        <div className="pj-footer__grid">
          <div className="pj-footer__brand-block">
            <p className="pj-footer__eyebrow">PixelJournal</p>
            <p className="pj-footer__lead">
              PixelJournal helps you publish photo-rich blogs with clear categories — travel, food,
              games, tech, and more.
            </p>
            <Link className="pj-footer__inline-link" to={ROUTES.CREATE_BLOG}>
              Start writing
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="pj-footer__column">
            <p className="pj-footer__label">Wander</p>
            <ul className="pj-footer__list">
              <li>
                <Link to={ROUTES.EXPLORE}>Explore</Link>
              </li>
              <li>
                <Link to={ROUTES.SAVED_BLOGS}>Saved journals</Link>
              </li>
              <li>
                <Link to={ROUTES.DASHBOARD}>Studio</Link>
              </li>
            </ul>
          </div>

          <div className="pj-footer__column pj-footer__column--wide">
            <p className="pj-footer__label">Categories</p>
            <ul className="pj-footer__tags">
              {BLOG_CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to={`${ROUTES.EXPLORE}?cat=${c.id}`}>{c.label}</Link>
                </li>
              ))}
              <li className="pj-footer__tags-more">
                <Link to={ROUTES.EXPLORE}>All topics →</Link>
              </li>
            </ul>
          </div>

          <div className="pj-footer__column">
            <p className="pj-footer__label">Letters</p>
            <p className="pj-footer__tiny">
              Occasional notes on craft, tools, and gentle experiments.
            </p>
            <a className="pj-footer__mail" href="mailto:hello@pixeljournal.app">
              <Mail size={16} strokeWidth={1.85} aria-hidden />
              hello@pixeljournal.app
            </a>
          </div>
        </div>

        <div className="pj-footer__bottom">
          <span>© {year} PixelJournal</span>
          <span className="pj-footer__credit">Made for slow scrolling & fast ideas.</span>
        </div>
      </Container>
    </footer>
  )
}
