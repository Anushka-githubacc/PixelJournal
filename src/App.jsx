import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'
import Explore from './pages/Explore'
import BlogDetails from './pages/BlogDetails'
import CreateBlog from './pages/CreateBlog'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import SavedBlogs from './pages/SavedBlogs'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.EXPLORE} element={<Explore />} />
        <Route path={ROUTES.BLOG_DETAILS} element={<BlogDetails />} />
        <Route path={ROUTES.CREATE_BLOG} element={<CreateBlog />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.SAVED_BLOGS} element={<SavedBlogs />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Route>
    </Routes>
  )
}
