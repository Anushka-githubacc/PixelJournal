import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import './Settings.css'

export default function Settings() {
  const [notif, setNotif] = useState(true)
  const [digest, setDigest] = useState(false)
  const [theme, setTheme] = useState('pastel')

  return (
    <div className="pj-settings">
      <Container narrow>
        <h1 className="pj-settings__title">Settings</h1>
        <p className="pj-settings__lede">Profile and preferences — stored locally in this demo.</p>

        <section className="pj-settings__block" aria-labelledby="pj-set-profile">
          <h2 id="pj-set-profile">Profile</h2>
          <label className="pj-settings__field">
            <span>Display name</span>
            <input type="text" defaultValue="Aanya Shah" />
          </label>
          <label className="pj-settings__field">
            <span>Bio</span>
            <textarea rows={3} defaultValue="Travel and budget guides from Mumbai." />
          </label>
        </section>

        <section className="pj-settings__block" aria-labelledby="pj-set-theme">
          <h2 id="pj-set-theme">Appearance</h2>
          <p className="pj-settings__hint">Theme toggle UI — full dark mode can ship with Firebase prefs.</p>
          <div className="pj-settings__segment" role="group" aria-label="Theme">
            {['pastel', 'paper', 'contrast'].map((t) => (
              <button
                key={t}
                type="button"
                className={`pj-settings__seg ${theme === t ? 'pj-settings__seg--on' : ''}`}
                onClick={() => setTheme(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        <section className="pj-settings__block" aria-labelledby="pj-set-notif">
          <h2 id="pj-set-notif">Notifications</h2>
          <label className="pj-settings__toggle">
            <input type="checkbox" checked={notif} onChange={() => setNotif((v) => !v)} />
            <span>Email when someone comments</span>
          </label>
          <label className="pj-settings__toggle">
            <input type="checkbox" checked={digest} onChange={() => setDigest((v) => !v)} />
            <span>Weekly digest of new posts you follow</span>
          </label>
        </section>

        <motion.button type="button" className="pj-settings__save" whileTap={{ scale: 0.99 }}>
          Save changes
        </motion.button>
      </Container>
    </div>
  )
}
