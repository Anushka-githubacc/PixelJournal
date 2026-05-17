import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { featuredPosts } from '../../data/homeMock'
import { getCategoryById } from '../../constants/categories'
import { ROUTES, blogPath } from '../../constants/routes'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './FloatingFeatured.css'

export function FloatingFeatured() {
  return (
    <MotionSection className="pj-float" aria-labelledby="pj-float-heading">
      <Container>
        <div className="pj-float__header">
          <div>
            <h2 id="pj-float-heading" className="pj-float__title">
              Featured this week
            </h2>
            <p className="pj-float__lede">
              Popular posts from travel, food, and art — tap through to read the full story.
            </p>
          </div>
          <Link className="pj-float__see" to={ROUTES.EXPLORE}>
            See everything
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="pj-float__grid">
          {featuredPosts.map((post, index) => {
            const cat = getCategoryById(post.categoryId)
            return (
              <motion.article
                key={post.id}
                className="pj-float__card"
                style={{ '--pj-card-tint': post.accent }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="pj-float__card-inner"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <div className="pj-float__media">
                    <img src={post.coverImage} alt="" loading="lazy" />
                  </div>
                  <div className="pj-float__meta">
                    <span className="pj-float__pill">{cat?.label ?? 'Journal'}</span>
                    <span className="pj-float__read">
                      <Clock size={14} strokeWidth={2} aria-hidden />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="pj-float__card-title">
                    <Link to={blogPath(post.slug)}>{post.title}</Link>
                  </h3>
                  <p className="pj-float__excerpt">{post.excerpt}</p>
                  <div className="pj-float__foot">
                    <span className="pj-float__author">{post.author}</span>
                    <Link className="pj-float__arrow" to={blogPath(post.slug)} aria-label={`Read ${post.title}`}>
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="pj-float__bob"
                  aria-hidden
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5 + index * 0.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.article>
            )
          })}
        </div>
      </Container>
    </MotionSection>
  )
}
