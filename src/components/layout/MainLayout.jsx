import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import './MainLayout.css'

export function MainLayout() {
  return (
    <div className="pj-layout">
      <a href="#main-content" className="pj-skip-link">
        Skip to content
      </a>
      <Navbar />
      <main className="pj-layout__main" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
