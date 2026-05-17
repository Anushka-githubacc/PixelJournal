import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CATEGORY_WRITING_HINTS } from '../../constants/categories'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './RecommendationShowcase.css'

const showcaseIds = ['travel', 'cooking', 'gaming', 'art-drawing', 'technology']

const labels = {
  travel: 'Travel',
  cooking: 'Cooking',
  gaming: 'Gaming',
  'art-drawing': 'Art & Drawing',
  technology: 'Technology',
}

export function RecommendationShowcase() {
  const [active, setActive] = useState(showcaseIds[0])

  const hints = useMemo(() => CATEGORY_WRITING_HINTS[active], [active])

  return (
    <MotionSection className="pj-reco" aria-labelledby="pj-reco-heading">
      <Container>
        <div className="pj-reco__grid">
          <div className="pj-reco__intro">
            <p className="pj-reco__eyebrow">While you write</p>
            <h2 id="pj-reco-heading" className="pj-reco__title">
              Smart prompts by category
            </h2>
            <p className="pj-reco__lede">
              Switch the tab — titles, tags, and section ideas update for travel, cooking, gaming,
              art, and tech posts.
            </p>
          </div>

          <div className="pj-reco__panel">
            <div className="pj-reco__tabs" role="tablist" aria-label="Category drafting modes">
              {showcaseIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active === id}
                  className={`pj-reco__tab ${active === id ? 'pj-reco__tab--active' : ''}`}
                  onClick={() => setActive(id)}
                >
                  {labels[id]}
                </button>
              ))}
            </div>

            <div className="pj-reco__stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  role="tabpanel"
                  className="pj-reco__sheet"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pj-reco__cluster">
                    <p className="pj-reco__label">Spark prompts</p>
                    <ul className="pj-reco__list">
                      {hints.suggestions.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pj-reco__cluster">
                    <p className="pj-reco__label">Suggested flow</p>
                    <ol className="pj-reco__flow">
                      {hints.structure.map((step, i) => (
                        <li key={step}>
                          <span className="pj-reco__step">{String(i + 1).padStart(2, '0')}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="pj-reco__cluster">
                    <p className="pj-reco__label">Craft nudges</p>
                    <ul className="pj-reco__chips">
                      {hints.tips.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  )
}
