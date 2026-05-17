import { motion } from 'framer-motion'
import { AuthSplit } from '../components/auth/AuthSplit'
import { ROUTES } from '../constants/routes'

export default function Login() {
  return (
    <AuthSplit
      title="Sign in"
      subtitle="Use your email — demo only, no account is created yet."
      footerLink={ROUTES.SIGNUP}
      footerLabel="New here? Create an account"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pj-auth__form"
        aria-label="Sign in"
      >
        <div className="pj-auth__field">
          <label className="pj-auth__label" htmlFor="login-email">
            Email
          </label>
          <input id="login-email" className="pj-auth__input" type="email" autoComplete="email" />
        </div>
        <div className="pj-auth__field">
          <label className="pj-auth__label" htmlFor="login-pass">
            Password
          </label>
          <input id="login-pass" className="pj-auth__input" type="password" autoComplete="current-password" />
        </div>
        <motion.button className="pj-auth__submit" type="submit" whileTap={{ scale: 0.99 }}>
          Continue
        </motion.button>
      </form>
    </AuthSplit>
  )
}
