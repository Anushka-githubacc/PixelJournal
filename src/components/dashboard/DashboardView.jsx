import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, FileEdit, PenLine, Plus } from 'lucide-react'
import { Container } from '../ui/Container'
import { ROUTES, blogPath } from '../../constants/routes'
import {
  dashboardDrafts,
  dashboardEngagement,
  dashboardPublished,
  dashboardStats,
} from '../../data/dashboardMock'
import { IMG } from '../../data/images'
import './DashboardView.css'

export function DashboardView() {
  return (
    <div className="pj-dash">
      <div className="pj-dash__banner">
        <img src={IMG.workspace} alt="" className="pj-dash__banner-img" />
        <div className="pj-dash__banner-inner">
          <Container>
            <p className="pj-dash__hello">Creator studio</p>
            <h1 className="pj-dash__title">Welcome back, Aanya</h1>
            <p className="pj-dash__sub">
              Drafts, published posts, and how readers are responding — in one place.
            </p>
            <div className="pj-dash__quick">
              <Link className="pj-dash__cta" to={ROUTES.CREATE_BLOG}>
                <PenLine size={18} />
                New post
              </Link>
              <Link className="pj-dash__ghost" to={ROUTES.EXPLORE}>
                View explore
                <ArrowRight size={16} />
              </Link>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <section className="pj-dash__stats" aria-label="Your stats">
          {[
            { label: 'Profile views', value: dashboardStats.views },
            { label: 'Followers', value: dashboardStats.followers },
            { label: 'Published', value: String(dashboardStats.published) },
            { label: 'Drafts', value: String(dashboardStats.drafts) },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="pj-dash__stat"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="pj-dash__stat-label">{s.label}</p>
              <p className="pj-dash__stat-value">{s.value}</p>
            </motion.div>
          ))}
        </section>

        <div className="pj-dash__grid">
          <section className="pj-dash__panel" aria-labelledby="pj-dash-pub">
            <div className="pj-dash__panel-head">
              <h2 id="pj-dash-pub">Published</h2>
              <Link to={ROUTES.PROFILE} className="pj-dash__link">
                Profile
              </Link>
            </div>
            <ul className="pj-dash__list">
              {dashboardPublished.map((p) => (
                <li key={p.slug}>
                  <Link to={blogPath(p.slug)} className="pj-dash__row">
                    <img src={p.coverImage} alt="" className="pj-dash__thumb" />
                    <div>
                      <p className="pj-dash__row-title">{p.title}</p>
                      <p className="pj-dash__row-meta">
                        {p.reads} reads · {p.publishedAt}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="pj-dash__panel" aria-labelledby="pj-dash-draft">
            <div className="pj-dash__panel-head">
              <h2 id="pj-dash-draft">Drafts</h2>
              <span className="pj-dash__badge">{dashboardDrafts.length}</span>
            </div>
            <ul className="pj-dash__drafts">
              {dashboardDrafts.map((d) => (
                <li key={d.id}>
                  <Link to={ROUTES.CREATE_BLOG} className="pj-dash__draft">
                    <FileEdit size={18} />
                    <div>
                      <p className="pj-dash__draft-title">{d.title}</p>
                      <p className="pj-dash__draft-meta">Updated {d.updated}</p>
                    </div>
                    <Plus size={16} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="pj-dash__panel pj-dash__panel--wide" aria-labelledby="pj-dash-eng">
            <div className="pj-dash__panel-head">
              <h2 id="pj-dash-eng">Engagement</h2>
              <BarChart3 size={20} aria-hidden />
            </div>
            <div className="pj-dash__eng">
              {dashboardEngagement.map((e) => (
                <div key={e.label} className="pj-dash__eng-card">
                  <p className="pj-dash__eng-label">{e.label}</p>
                  <p className="pj-dash__eng-value">{e.value}</p>
                  <p className="pj-dash__eng-hint">{e.hint}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
