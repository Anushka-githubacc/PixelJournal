import { EXPLORE_POSTS } from './blogMock'

export const dashboardStats = {
  views: '48.2k',
  followers: '1,284',
  published: 38,
  drafts: 5,
  comments: '312',
}

export const dashboardPublished = EXPLORE_POSTS.slice(0, 4).map((p) => ({
  slug: p.slug,
  title: p.title,
  reads: p.reads,
  coverImage: p.coverImage,
  publishedAt: p.publishedAt,
}))

export const dashboardDrafts = [
  { id: 'd1', title: 'Taipei night markets — budget sheet', updated: '2 hours ago' },
  { id: 'd2', title: 'Desk tour 2026', updated: 'Yesterday' },
  { id: 'd3', title: 'Film roll #14 contact sheet', updated: 'Mar 10' },
]

export const dashboardEngagement = [
  { label: 'New comments', value: '18', hint: 'This week' },
  { label: 'Saves', value: '426', hint: 'All posts' },
  { label: 'Newsletter', value: '892', hint: 'Subscribers' },
]
