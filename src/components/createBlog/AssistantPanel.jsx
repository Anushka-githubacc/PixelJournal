import { AnimatePresence, motion } from 'framer-motion'
import {
  Compass,
  Layers,
  Lightbulb,
  ListOrdered,
  Palette,
  Sparkles,
  Tag,
  TextQuote,
  Wrench,
} from 'lucide-react'
import './AssistantPanel.css'

const SECTION_ORDER = [
  'titleIdeas',
  'prompts',
  'structure',
  'contentIdeas',
  'formattingIdeas',
  'craftTips',
  'ratingIdeas',
  'setupIdeas',
  'destinationIdeas',
  'photographyIdeas',
  'ingredientsLayout',
  'preparationGuidance',
  'materialIdeas',
  'inspirationPrompts',
  'suggestedTags',
]

const SECTION_META = {
  titleIdeas: { title: 'Title sparks', hint: 'Tap to pour into your headline', icon: Sparkles },
  prompts: { title: 'Writing prompts', hint: 'Stitch into your manuscript', icon: TextQuote },
  structure: { title: 'Suggested flow', hint: 'Scene beats for this journal', icon: ListOrdered },
  contentIdeas: { title: 'Story angles', hint: 'Paragraph invitations', icon: Compass },
  formattingIdeas: { title: 'Layout & rhythm', hint: 'How sections can breathe', icon: Layers },
  craftTips: { title: 'Craft nudges', hint: 'Small lifts while drafting', icon: Lightbulb },
  ratingIdeas: { title: 'Rating angles', hint: 'Honest critique scaffolding', icon: Palette },
  setupIdeas: { title: 'Setup notes', hint: 'Rig, audio, display truth', icon: Wrench },
  destinationIdeas: { title: 'Destination lenses', hint: 'Where the itinerary leans', icon: Compass },
  photographyIdeas: { title: 'Photography notes', hint: 'Light, frames, restraint', icon: Sparkles },
  ingredientsLayout: { title: 'Ingredients layout', hint: 'How the mise reads', icon: Layers },
  preparationGuidance: { title: 'Prep choreography', hint: 'Heat & pacing', icon: ListOrdered },
  materialIdeas: { title: 'Materials desk', hint: 'Paper, pigment, pressure', icon: Palette },
  inspirationPrompts: { title: 'Inspiration sparks', hint: 'Prompts before pencil hits', icon: Lightbulb },
  suggestedTags: { title: 'Tag ideas', hint: 'Tap to tuck beside your piece', icon: Tag },
}

export function AssistantPanel({
  categoryId,
  categoryLabel,
  assistant,
  existingTags,
  onPickTitle,
  onAddTag,
  onAppendBody,
}) {
  const norm = (s) => s.trim().toLowerCase()

  return (
    <aside className="pj-assistant" aria-label="Smart writing companion">
      <div className="pj-assistant__ambient" aria-hidden>
        <span className="pj-assistant__blob pj-assistant__blob--a" />
        <span className="pj-assistant__blob pj-assistant__blob--b" />
      </div>

      <div className="pj-assistant__inner">
        <header className="pj-assistant__head">
          <div className="pj-assistant__badge" aria-hidden>
            <Sparkles size={18} strokeWidth={1.85} />
          </div>
          <div>
            <p className="pj-assistant__eyebrow">Living companion</p>
            <h2 className="pj-assistant__title">Studio signals</h2>
            <p className="pj-assistant__sub">
              Tuned for <strong>{categoryLabel}</strong> — swap categories anytime; the desk
              reshapes with you.
            </p>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={categoryId}
            className="pj-assistant__stack"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {SECTION_ORDER.map((key) => {
              const items = assistant[key]
              if (!items?.length) return null
              const meta = SECTION_META[key]
              if (!meta) return null
              const Icon = meta.icon

              return (
                <motion.section
                  key={`${categoryId}-${key}`}
                  className="pj-assistant__card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pj-assistant__card-head">
                    <span className="pj-assistant__card-icon" aria-hidden>
                      <Icon size={17} strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="pj-assistant__card-title">{meta.title}</h3>
                      <p className="pj-assistant__card-hint">{meta.hint}</p>
                    </div>
                  </div>

                  <ul className="pj-assistant__chips">
                    {items.map((text, idx) => {
                      const isTag = key === 'suggestedTags'
                      const taken =
                        isTag && existingTags.some((t) => norm(t) === norm(text))

                      const handle = () => {
                        if (isTag) {
                          if (!taken) onAddTag(text)
                          return
                        }
                        if (key === 'titleIdeas') {
                          onPickTitle(text)
                          return
                        }
                        if (key === 'structure') {
                          onAppendBody(`\n\n## ${text}\n`)
                          return
                        }
                        onAppendBody(`\n\n${text}`)
                      }

                      return (
                        <li key={`${text}-${idx}`}>
                          <motion.button
                            type="button"
                            className={`pj-assistant__chip ${taken ? 'pj-assistant__chip--muted' : ''}`}
                            onClick={handle}
                            whileHover={{ y: -3, scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            disabled={isTag && taken}
                          >
                            <span>{text}</span>
                          </motion.button>
                        </li>
                      )
                    })}
                  </ul>
                </motion.section>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  )
}
