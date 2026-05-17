import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bookmark } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { EXPLORE_POSTS, SAVED_COLLECTIONS } from '../data/blogMock'
import { blogPath } from '../constants/routes'
import './SavedBlogs.css'

function postBySlug(slug) {
  return EXPLORE_POSTS.find((p) => p.slug === slug)
}

export default function SavedBlogs() {
  return (
    <div className="pj-saved">
      <Container>
        <header className="pj-saved__head">
          <span className="pj-saved__icon" aria-hidden>
            <Bookmark size={22} strokeWidth={2} />
          </span>
          <div>
            <h1 className="pj-saved__title">Saved blogs</h1>
            <p className="pj-saved__sub">Collections you can rename when sync goes live.</p>
          </div>
        </header>

        {SAVED_COLLECTIONS.map((col) => (
          <section key={col.id} className="pj-saved__collection" aria-labelledby={`col-${col.id}`}>
            <h2 id={`col-${col.id}`} className="pj-saved__col-title">
              {col.label}
            </h2>
            <div className="pj-saved__rail">
              {col.slugs.map((slug, i) => {
                const p = postBySlug(slug)
                if (!p) return null
                return (
                  <motion.article
                    key={slug}
                    className="pj-saved__card"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link to={blogPath(slug)} className="pj-saved__link">
                      <div className="pj-saved__media">
                        <img src={p.coverImage} alt="" loading="lazy" />
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                    </Link>
                  </motion.article>
                )
              })}
            </div>
          </section>
        ))}
      </Container>
    </div>
  )
}
