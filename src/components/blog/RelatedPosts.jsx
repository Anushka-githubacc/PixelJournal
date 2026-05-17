import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { blogPath } from '../../constants/routes'
import './RelatedPosts.css'

export function RelatedPosts({ posts }) {
  if (!posts.length) return null
  return (
    <section className="pj-related" aria-labelledby="pj-related-title">
      <h2 id="pj-related-title" className="pj-related__title">
        More to read
      </h2>
      <div className="pj-related__grid">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            className="pj-related__card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Link to={blogPath(post.slug)} className="pj-related__link">
              {post.coverImage ? (
                <div className="pj-related__media">
                  <img src={post.coverImage} alt="" loading="lazy" />
                </div>
              ) : null}
              <h3 className="pj-related__h">{post.title}</h3>
              <p className="pj-related__ex">{post.excerpt}</p>
              <span className="pj-related__meta">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="pj-related__go">
                Open
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
