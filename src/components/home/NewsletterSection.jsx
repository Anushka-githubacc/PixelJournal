import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './NewsletterSection.css'

export function NewsletterSection() {
  return (
    <MotionSection className="pj-news" aria-labelledby="pj-news-heading">
      <Container>
        <div className="pj-news__card">
          <div className="pj-news__stamp" aria-hidden>
            <span>Vol. 01</span>
          </div>
          <div className="pj-news__copy">
            <h2 id="pj-news-heading" className="pj-news__title">
              Weekly email digest
            </h2>
            <p className="pj-news__text">
              One email with featured posts and creator interviews. Unsubscribe anytime — no spam.
            </p>
          </div>
          <form
            className="pj-news__form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <label className="pj-news__field">
              <span className="pj-news__label">Email</span>
              <input className="pj-news__input" type="email" name="email" placeholder="you@studio.mail" autoComplete="email" />
            </label>
            <motion.button
              className="pj-news__submit"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={17} aria-hidden />
              Subscribe
            </motion.button>
          </form>
        </div>
      </Container>
    </MotionSection>
  )
}
