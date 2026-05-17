import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { trendingPosts } from '../../data/homeMock'
import { getCategoryById } from '../../constants/categories'
import { blogPath } from '../../constants/routes'
import { MotionSection } from '../ui/MotionSection'
import { Container } from '../ui/Container'
import './TrendingStrip.css'

export function TrendingStrip() {
  return (
    <MotionSection className="pj-trend" aria-labelledby="pj-trend-heading">
      <Container>
        <div className="pj-trend__head">
          <span className="pj-trend__icon" aria-hidden>
            <Flame size={18} strokeWidth={2} />
          </span>
          <h2 id="pj-trend-heading" className="pj-trend__title">
            Trending blogs this week
          </h2>
        </div>
        <ul className="pj-trend__list">
          {trendingPosts.map((post, i) => {
            const cat = getCategoryById(post.categoryId)
            return (
              <motion.li
                key={post.slug}
                className="pj-trend__item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Link to={blogPath(post.slug)} className="pj-trend__link">
                  {post.thumb ? (
                    <span className="pj-trend__thumb">
                      <img src={post.thumb} alt="" loading="lazy" />
                    </span>
                  ) : null}
                  <span className="pj-trend__body">
                  <span className="pj-trend__reads">{post.reads} reads</span>
                  <span className="pj-trend__post-title">{post.title}</span>
                  <span className="pj-trend__meta">
                    {post.author}
                    <span className="pj-trend__dot" aria-hidden>
                      ·
                    </span>
                    {cat?.label}
                  </span>
                  </span>
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </MotionSection>
  )
}
