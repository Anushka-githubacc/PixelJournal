import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { spotlightCreators } from '../../data/homeMock'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './CreatorSpotlight.css'

export function CreatorSpotlight() {
  return (
    <MotionSection className="pj-spotlight" aria-labelledby="pj-spotlight-heading">
      <Container>
        <div className="pj-spotlight__header">
          <div className="pj-spotlight__badge" aria-hidden>
            <Sparkles size={16} />
          </div>
          <div>
            <h2 id="pj-spotlight-heading" className="pj-spotlight__title">
              Popular creator stories
            </h2>
            <p className="pj-spotlight__lede">
              Writers and photographers on PixelJournal this month — follow their journals from your Explore feed.
            </p>
          </div>
        </div>

        <div className="pj-spotlight__rail">
          {spotlightCreators.map((creator, index) => (
            <motion.figure
              key={creator.id}
              className="pj-spotlight__card"
              style={{ '--pj-spot': creator.accent }}
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="pj-spotlight__avatar">
                <img src={creator.portrait} alt="" loading="lazy" />
              </div>
              <figcaption>
                <p className="pj-spotlight__name">{creator.name}</p>
                <p className="pj-spotlight__role">{creator.role}</p>
                <p className="pj-spotlight__bio">{creator.bio}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </MotionSection>
  )
}
