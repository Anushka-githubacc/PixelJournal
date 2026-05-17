import { motion, LayoutGroup } from 'framer-motion'
import {
  Briefcase,
  Camera,
  ChefHat,
  Cpu,
  Film,
  Gamepad2,
  Heart,
  LayoutGrid,
  Palette,
  Plane,
  Sparkles,
} from 'lucide-react'
import { BLOG_CATEGORIES } from '../../constants/categories'
import './CategoryFilters.css'

const ICONS = {
  technology: Cpu,
  gaming: Gamepad2,
  travel: Plane,
  cooking: ChefHat,
  'art-drawing': Palette,
  productivity: Sparkles,
  lifestyle: Heart,
  photography: Camera,
  business: Briefcase,
  media: Film,
}

export function CategoryFilters({ activeId, onChange }) {
  const items = [{ id: 'all', label: 'All rooms', accent: 'linear-gradient(145deg,#ffd6e8,#c9e7ff)' }, ...BLOG_CATEGORIES]

  return (
    <section className="pj-x-filters" aria-labelledby="pj-x-filters-title">
      <div className="pj-x-filters__head">
        <h2 id="pj-x-filters-title" className="pj-x-filters__title">
          Browse by mood
        </h2>
        <p className="pj-x-filters__lede">
          Switch lanes — colors and showcases breathe with you.
        </p>
      </div>

      <LayoutGroup id="explore-cats">
        <div className="pj-x-filters__grid" role="tablist" aria-label="Journal categories">
          {items.map((c) => {
            const Icon = c.id === 'all' ? LayoutGrid : ICONS[c.id]
            const selected = activeId === c.id
            return (
              <motion.button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`pj-x-filters__pill ${selected ? 'pj-x-filters__pill--on' : ''}`}
                style={c.id !== 'all' ? { '--pj-filter-accent': c.accent } : undefined}
                onClick={() => onChange(c.id)}
                layout
                whileHover={{ y: -4, rotate: selected ? 0 : -0.8 }}
                whileTap={{ scale: 0.99 }}
              >
                {selected ? (
                  <motion.span layoutId="explore-cat-glow" className="pj-x-filters__glow" aria-hidden />
                ) : null}
                <span className="pj-x-filters__ico" aria-hidden>
                  <Icon size={17} strokeWidth={2} />
                </span>
                <span className="pj-x-filters__txt">{c.label}</span>
              </motion.button>
            )
          })}
        </div>
      </LayoutGroup>
    </section>
  )
}
