import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Feather } from 'lucide-react'
import { ROUTES } from '../../constants/routes'
import { Container } from '../ui/Container'
import { IMG } from '../../data/images'
import './HeroSection.css'

const container = {
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <section className="pj-hero" aria-labelledby="pj-hero-heading">
      <div className="pj-hero__bg" aria-hidden>
        <div className="pj-hero__orb pj-hero__orb--a" />
        <div className="pj-hero__orb pj-hero__orb--b" />
        <div className="pj-hero__orb pj-hero__orb--c" />
        <div className="pj-hero__grain" />
      </div>

      <Container className="pj-hero__inner">
        <motion.div
          className="pj-hero__copy"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="pj-hero__kicker">
            Trending blogs this week
          </motion.p>
          <motion.h1 id="pj-hero-heading" variants={item} className="pj-hero__title">
            Write and publish
            <span className="pj-hero__title-line"> colourful stories readers finish.</span>
          </motion.h1>
          <motion.p variants={item} className="pj-hero__subtitle">
            PixelJournal is a modern blogging space — travel, food, games, tech, and more. Big
            photos, clear headings, and layouts that feel like a real magazine home page.
          </motion.p>
          <motion.div variants={item} className="pj-hero__actions">
            <Link className="pj-hero__primary" to={ROUTES.CREATE_BLOG}>
              <Feather size={17} strokeWidth={2} aria-hidden />
              Start a blog
            </Link>
            <Link className="pj-hero__secondary" to={ROUTES.EXPLORE}>
              Explore categories
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="pj-hero__stage"
          initial={{ opacity: 0, rotate: -3, y: 40 }}
          animate={{ opacity: 1, rotate: -1.5, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="pj-hero__collage">
            <motion.img
              src={IMG.heroCollageA}
              alt=""
              className="pj-hero__shot pj-hero__shot--a"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src={IMG.heroCollageB}
              alt=""
              className="pj-hero__shot pj-hero__shot--b"
              whileHover={{ scale: 1.02 }}
            />
            <motion.img
              src={IMG.heroCollageC}
              alt=""
              className="pj-hero__shot pj-hero__shot--c"
              whileHover={{ scale: 1.02 }}
            />
            <div className="pj-hero__caption">
              <span className="pj-hero__caption-label">Featured</span>
              <span className="pj-hero__caption-text">Travel · food · gaming desk</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
