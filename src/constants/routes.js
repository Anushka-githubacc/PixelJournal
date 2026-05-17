export const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  BLOG_DETAILS: '/blog/:slug',
  CREATE_BLOG: '/create',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  SAVED_BLOGS: '/saved',
  SETTINGS: '/settings',
}

export function blogPath(slug) {
  return `/blog/${slug}`
}
