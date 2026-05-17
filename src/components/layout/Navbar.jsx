import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, PenLine, Sparkles, X } from 'lucide-react'
import { ROUTES } from '../../constants/routes'
import { Container } from '../ui/Container'
import './Navbar.css'

const navItems = [
  { to: ROUTES.EXPLORE, label: 'Explore' },
  { to: ROUTES.CREATE_BLOG, label: 'Create' },
  { to: ROUTES.SAVED_BLOGS, label: 'Saved' },
  { to: ROUTES.DASHBOARD, label: 'Studio' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      className={`pj-nav ${scrolled ? 'pj-nav--scrolled' : ''}`}
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(255, 251, 247, 0.92)' : 'rgba(255, 251, 247, 0.72)',
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="pj-nav__inner">
        <Link to={ROUTES.HOME} className="pj-nav__brand" aria-label="PixelJournal home">
          <span className="pj-nav__logo-mark" aria-hidden>
            <Sparkles size={18} strokeWidth={1.75} />
          </span>
          <span className="pj-nav__logo-type">PixelJournal</span>
        </Link>

        <nav className="pj-nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `pj-nav__link ${isActive ? 'pj-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="pj-nav__actions">
          <Link className="pj-nav__ghost" to={ROUTES.LOGIN}>
            Sign in
          </Link>
          <Link className="pj-nav__cta" to={ROUTES.SIGNUP}>
            <PenLine size={16} strokeWidth={2} aria-hidden />
            Join
          </Link>
          <button
            type="button"
            className="pj-nav__menu-btn"
            aria-expanded={open}
            aria-controls="pj-mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="pj-visually-hidden">Menu</span>
          </button>
        </div>
      </Container>

      <motion.div
        id="pj-mobile-drawer"
        className="pj-nav__drawer"
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!open}
      >
        <Container className="pj-nav__drawer-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="pj-nav__drawer-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to={ROUTES.LOGIN} className="pj-nav__drawer-link" onClick={() => setOpen(false)}>
            Sign in
          </Link>
          <Link to={ROUTES.SIGNUP} className="pj-nav__drawer-cta" onClick={() => setOpen(false)}>
            Create account
          </Link>
        </Container>
      </motion.div>
    </motion.header>
  )
}
