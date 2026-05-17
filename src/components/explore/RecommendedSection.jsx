import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategoryById } from '../../constants/categories'
import { blogPath } from '../../constants/routes'
import './RecommendedSection.css'

export function RecommendedSection({ moodCopy, posts }) {
  return (
    <section className="pj-x-rec" aria-labelledby="pj-x-rec-title">
      <div className="pj-x-rec__shell">
        <motion.div
          key={moodCopy.title}
          className="pj-x-rec__manifest"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="pj-x-rec__kicker">{moodCopy.kicker}</p>
          <h2 id="pj-x-rec-title" className="pj-x-rec__title">
            {moodCopy.title}
          </h2>
          <p className="pj-x-rec__body">{moodCopy.body}</p>
        </motion.div>

        <div className="pj-x-rec__deck">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="pj-x-rec__card"
              style={{ '--pj-rc': post.accent }}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
            >
              <Link to={blogPath(post.slug)} className="pj-x-rec__link">
                <span className="pj-x-rec__cat">{getCategoryById(post.categoryId)?.label}</span>
                <h3 className="pj-x-rec__card-title">{post.title}</h3>
                <p className="pj-x-rec__ex">{post.excerpt}</p>
                <span className="pj-x-rec__go">
                  Read
                  <ArrowUpRight size={16} aria-hidden />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
