import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { AUTHORS, EXPLORE_POSTS } from '../data/blogMock'
import { IMG } from '../data/images'
import { ROUTES, blogPath } from '../constants/routes'
import './Profile.css'

const ME = AUTHORS.aanya

export default function Profile() {
  const posts = EXPLORE_POSTS.filter((p) => p.authorId === ME.id)

  return (
    <div className="pj-profile">
      <div className="pj-profile__banner">
        <img src={IMG.profileBanner} alt="" className="pj-profile__banner-img" />
        <div className="pj-profile__banner-scrim" />
        <Container className="pj-profile__banner-inner">
          <img src={ME.avatar} alt="" className="pj-profile__avatar" />
          <div>
            <h1 className="pj-profile__name">{ME.name}</h1>
            <p className="pj-profile__role">{ME.role}</p>
            <p className="pj-profile__bio">{ME.bio}</p>
            <div className="pj-profile__actions">
              <Link className="pj-profile__btn" to={ROUTES.CREATE_BLOG}>
                New post
              </Link>
              <Link className="pj-profile__ghost" to={ROUTES.SETTINGS}>
                Edit profile
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <section className="pj-profile__section" aria-labelledby="pj-profile-posts">
          <h2 id="pj-profile-posts">Published posts</h2>
          <div className="pj-profile__grid">
            {posts.map((p, i) => (
              <motion.article
                key={p.slug}
                className="pj-profile__card"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={blogPath(p.slug)} className="pj-profile__card-link">
                  <div className="pj-profile__media">
                    <img src={p.coverImage} alt="" loading="lazy" />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pj-profile__section" aria-labelledby="pj-profile-act">
          <h2 id="pj-profile-act">Activity</h2>
          <ul className="pj-profile__activity">
            <li>Commented on “Slack norms…” — Mar 12</li>
            <li>Saved “Winter broth…” — Mar 9</li>
            <li>Published “Slow trains…” — Mar 1</li>
          </ul>
        </section>

        <section className="pj-profile__section" aria-labelledby="pj-profile-int">
          <h2 id="pj-profile-int">Interests</h2>
          <div className="pj-profile__tags">
            {['Japan', 'budget travel', 'street food', 'rail pass'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}
