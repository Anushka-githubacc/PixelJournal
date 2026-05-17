import { motion } from 'framer-motion'
import { AuthSplit } from '../components/auth/AuthSplit'
import { ROUTES } from '../constants/routes'

export default function Signup() {
  return (
    <AuthSplit
      title="Create your blog"
      subtitle="Pick a display name and email. Firebase auth can plug in later."
      footerLink={ROUTES.LOGIN}
      footerLabel="Already have an account? Sign in"
    >
      <form onSubmit={(e) => e.preventDefault()} aria-label="Sign up">
        <div className="pj-auth__field">
          <label className="pj-auth__label" htmlFor="su-name">
            Display name
          </label>
          <input id="su-name" className="pj-auth__input" type="text" autoComplete="name" />
        </div>
        <div className="pj-auth__field">
          <label className="pj-auth__label" htmlFor="su-email">
            Email
          </label>
          <input id="su-email" className="pj-auth__input" type="email" autoComplete="email" />
        </div>
        <div className="pj-auth__field">
          <label className="pj-auth__label" htmlFor="su-pass">
            Password
          </label>
          <input id="su-pass" className="pj-auth__input" type="password" autoComplete="new-password" />
        </div>
        <motion.button className="pj-auth__submit" type="submit" whileTap={{ scale: 0.99 }}>
          Start writing
        </motion.button>
      </form>
    </AuthSplit>
  )
}
