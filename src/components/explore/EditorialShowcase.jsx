import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategoryById } from '../../constants/categories'
import { blogPath } from '../../constants/routes'
import './EditorialShowcase.css'

function CardLink({ post, className, children }) {
  return (
    <Link to={blogPath(post.slug)} className={className}>
      {children}
    </Link>
  )
}

export function EditorialShowcase({ posts, categoryKey }) {
  const top = posts.slice(0, 6)

  return (
    <section className="pj-x-show" aria-labelledby="pj-x-show-title">
      <div className="pj-x-show__intro">
        <h2 id="pj-x-show-title" className="pj-x-show__title">
          Featured reads
        </h2>
        <p className="pj-x-show__lede">
          Large photo posts mixed with quick links — same feed, different shapes so it never feels
          like a template grid.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!top.length ? (
          <motion.p
            key="empty"
            className="pj-x-show__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Nothing matches this drift — widen search or choose another mood.
          </motion.p>
        ) : (
          <motion.div
            key={categoryKey}
            className="pj-x-show__mosaic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {top[0] ? (
              <motion.article
                className="pj-x-show__lead"
                style={{ '--pj-card': top[0].accent }}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <CardLink post={top[0]} className="pj-x-show__lead-link">
                  {top[0].coverImage ? (
                    <div className="pj-x-show__lead-media">
                      <img src={top[0].coverImage} alt="" loading="lazy" />
                    </div>
                  ) : null}
                  <div className="pj-x-show__lead-body">
                  <span className="pj-x-show__eyebrow">
                    {getCategoryById(top[0].categoryId)?.label ?? 'Journal'}
                  </span>
                  <h3 className="pj-x-show__lead-title">{top[0].title}</h3>
                  <p className="pj-x-show__excerpt">{top[0].excerpt}</p>
                  <div className="pj-x-show__foot">
                    <span>{top[0].author}</span>
                    <span className="pj-x-show__read">
                      <Clock size={14} /> {top[0].readTime}
                    </span>
                  </div>
                  <span className="pj-x-show__corner" aria-hidden>
                    <ArrowUpRight size={22} />
                  </span>
                  </div>
                </CardLink>
              </motion.article>
            ) : null}

            <div className="pj-x-show__stack">
              {top[1] ? (
                <motion.article
                  key={top[1].id}
                  className="pj-x-show__slim pj-x-show__slim--a"
                  style={{ '--pj-card': top[1].accent }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <CardLink post={top[1]} className="pj-x-show__slim-link">
                    <h3 className="pj-x-show__slim-title">{top[1].title}</h3>
                    <p className="pj-x-show__slim-ex">{top[1].excerpt}</p>
                  </CardLink>
                </motion.article>
              ) : null}
              {top[2] ? (
                <motion.article
                  key={top[2].id}
                  className="pj-x-show__slim pj-x-show__slim--b"
                  style={{ '--pj-card': top[2].accent }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <CardLink post={top[2]} className="pj-x-show__slim-link">
                    <h3 className="pj-x-show__slim-title">{top[2].title}</h3>
                    <p className="pj-x-show__slim-ex">{top[2].excerpt}</p>
                  </CardLink>
                </motion.article>
              ) : null}
            </div>

            <div className="pj-x-show__ribbon">
              {top[3] ? (
                <motion.article
                  key={top[3].id}
                  className="pj-x-show__band"
                  style={{ '--pj-card': top[3].accent }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                >
                  <CardLink post={top[3]} className="pj-x-show__band-link">
                    <span className="pj-x-show__band-label">
                      {getCategoryById(top[3].categoryId)?.label}
                    </span>
                    <h3 className="pj-x-show__band-title">{top[3].title}</h3>
                    <span className="pj-x-show__band-meta">{top[3].reads} reads · {top[3].author}</span>
                  </CardLink>
                </motion.article>
              ) : null}
            </div>

            <div className="pj-x-show__triad">
              {[top[4], top[5]].map(
                (post, i) =>
                  post && (
                    <motion.article
                      key={post.id}
                      className={`pj-x-show__tile pj-x-show__tile--${i}`}
                      style={{ '--pj-card': post.accent }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.05 }}
                      whileHover={{ rotate: i === 0 ? -1 : 1, y: -4 }}
                    >
                      <CardLink post={post} className="pj-x-show__tile-link">
                        <h3 className="pj-x-show__tile-title">{post.title}</h3>
                        <p className="pj-x-show__tile-ex">{post.excerpt}</p>
                        <span className="pj-x-show__tile-author">{post.author}</span>
                      </CardLink>
                    </motion.article>
                  ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
