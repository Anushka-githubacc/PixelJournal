/** Discovery UI copy + filters — posts live in `blogMock.js`. */


import { CATEGORY_HEX } from '../constants/categoryHex'
import { EXPLORE_POSTS } from './blogMock'
import { IMG } from './images'

export { EXPLORE_POSTS }

export const TRENDING_TAGS = [
  'Japan travel',
  'weeknight dinner',
  'PC gaming',
  'Lightroom',
  'remote work',
  'startup pricing',
  'sketchbook',
  'film essay',
  'Slack tips',
  'co-op games',
  'street photos',
  'calendar audit',
]

export const CATEGORY_MOOD = {
  all: {
    label: 'All categories',
    headline: 'Explore blogs across every category',
    sub: 'Trending posts, popular tags, and creators — updated for this week.',
    surface:
      'linear-gradient(168deg, #fff7f2 0%, #fdeef6 30%, #e8f4ff 62%, #f2fff6 100%)',
    orbA: CATEGORY_HEX['art-drawing'],
    orbB: CATEGORY_HEX.travel,
    orbC: CATEGORY_HEX.cooking,
  },
  technology: {
    label: 'Technology',
    headline: 'Latest tech & workflow posts',
    sub: 'Laptops, apps, remote teams, and honest automation notes.',
    surface: 'linear-gradient(165deg, #f0fffc 0%, #dff8f4 42%, #fff9f6 88%)',
    orbA: CATEGORY_HEX.technology,
    orbB: CATEGORY_HEX.photography,
    orbC: CATEGORY_HEX.media,
  },
  gaming: {
    label: 'Gaming',
    headline: 'Latest gaming reviews',
    sub: 'Setups, difficulty, co-op picks, and screenshots that match the words.',
    surface: 'linear-gradient(175deg, #faf7ff 0%, #efe8ff 45%, #fff5f0 92%)',
    orbA: CATEGORY_HEX.gaming,
    orbB: CATEGORY_HEX.media,
    orbC: CATEGORY_HEX.technology,
  },
  travel: {
    label: 'Travel',
    headline: 'Travel journals from creators',
    sub: 'Budgets, trains, food stalls, and photo tips you can reuse.',
    surface: 'linear-gradient(170deg, #f3fbff 0%, #dff2ff 40%, #fff8f2 82%)',
    orbA: CATEGORY_HEX.travel,
    orbB: CATEGORY_HEX.lifestyle,
    orbC: CATEGORY_HEX.photography,
  },
  cooking: {
    label: 'Cooking',
    headline: 'Recipes & kitchen notes',
    sub: 'Timers, substitutions, and what actually worked on a Tuesday night.',
    surface: 'linear-gradient(172deg, #fff9f4 0%, #ffe8d4 42%, #fffdf6 90%)',
    orbA: CATEGORY_HEX.cooking,
    orbB: CATEGORY_HEX.lifestyle,
    orbC: CATEGORY_HEX.media,
  },
  'art-drawing': {
    label: 'Art & Drawing',
    headline: 'Sketch logs & process posts',
    sub: 'Supplies, thumbnails, and studio habits without the fluff.',
    surface: 'linear-gradient(168deg, #fff8fb 0%, #ffe8f2 36%, #f7faff 80%)',
    orbA: CATEGORY_HEX['art-drawing'],
    orbB: CATEGORY_HEX.photography,
    orbC: CATEGORY_HEX.lifestyle,
  },
  productivity: {
    label: 'Productivity',
    headline: 'Calendars, focus, and habits',
    sub: 'Real experiments — not another “morning routine” template.',
    surface: 'linear-gradient(175deg, #fffdf6 0%, #fff3c9 35%, #f0fff8 85%)',
    orbA: CATEGORY_HEX.productivity,
    orbB: CATEGORY_HEX.technology,
    orbC: CATEGORY_HEX.lifestyle,
  },
  lifestyle: {
    label: 'Lifestyle',
    headline: 'Home, routines, neighbourhood',
    sub: 'Short essays on everyday life — readable in one sitting.',
    surface: 'linear-gradient(170deg, #fffbf7 0%, #f0ebe3 40%, #fdeef8 85%)',
    orbA: CATEGORY_HEX.lifestyle,
    orbB: CATEGORY_HEX.cooking,
    orbC: CATEGORY_HEX.travel,
  },
  photography: {
    label: 'Photography',
    headline: 'Photo walks & editing notes',
    sub: 'Gear, Lightroom, and street frames with settings when it helps.',
    surface: 'linear-gradient(165deg, #f5fbff 0%, #dcefff 38%, #fff9f6 90%)',
    orbA: CATEGORY_HEX.photography,
    orbB: CATEGORY_HEX.travel,
    orbC: CATEGORY_HEX.media,
  },
  business: {
    label: 'Business',
    headline: 'Founder & operator writing',
    sub: 'Pricing, hiring, and lessons from shipping real products.',
    surface: 'linear-gradient(172deg, #faf8ff 0%, #ebe4ff 42%, #fff9f5 88%)',
    orbA: CATEGORY_HEX.business,
    orbB: CATEGORY_HEX.technology,
    orbC: CATEGORY_HEX.productivity,
  },
  media: {
    label: 'Media',
    headline: 'Film, music, podcasts',
    sub: 'Scene breakdowns and albums worth a full listen.',
    surface: 'linear-gradient(168deg, #f8fffb 0%, #dffaf0 36%, #fff6fb 82%)',
    orbA: CATEGORY_HEX.media,
    orbB: CATEGORY_HEX.photography,
    orbC: CATEGORY_HEX.gaming,
  },
}

export const RECOMMENDED_MOOD = {
  all: {
    kicker: 'Recommended for you',
    title: 'Popular creator stories',
    body: 'A mix of travel, tech, and food — based on what readers finish most often this month.',
  },
  technology: {
    kicker: 'Recommended for you',
    title: 'Tech & workflow picks',
    body: 'Remote work, laptops, and small scripts that save real time.',
  },
  gaming: {
    kicker: 'Recommended for you',
    title: 'Gaming posts readers finish',
    body: 'Reviews with setup notes — PC and console friendly.',
  },
  travel: {
    kicker: 'Recommended for you',
    title: 'Travel posts worth saving',
    body: 'Budget breakdowns and photo tips from trips you can copy.',
  },
  cooking: {
    kicker: 'Recommended for you',
    title: 'Cooking posts for weeknights',
    body: 'Soups, rice bowls, and substitutions that do not require a specialty store.',
  },
  'art-drawing': {
    kicker: 'Recommended for you',
    title: 'Art & sketch logs',
    body: 'Process photos and supply lists from working artists.',
  },
  productivity: {
    kicker: 'Recommended for you',
    title: 'Productivity without the hype',
    body: 'Calendar audits and focus blocks that survived a busy quarter.',
  },
  lifestyle: {
    kicker: 'Recommended for you',
    title: 'Lifestyle & neighbourhood',
    body: 'Short reads on home, habits, and city life.',
  },
  photography: {
    kicker: 'Recommended for you',
    title: 'Photography tutorials',
    body: 'Editing, composition, and gear notes with sample frames.',
  },
  business: {
    kicker: 'Recommended for you',
    title: 'Business & startups',
    body: 'Pricing changes, emails, and operator lessons.',
  },
  media: {
    kicker: 'Recommended for you',
    title: 'Media reviews & essays',
    body: 'Film scenes, albums, and podcasts with timestamps when it helps.',
  },
}
export const EXPLORE_CREATORS = [
  {
    id: 'cr1',
    slug: 'aanya-shah',
    name: 'Aanya Shah',
    role: 'Travel blogger',
    journals: 42,
    accent: CATEGORY_HEX.travel,
    portrait: IMG.portraitAanya,
  },
  {
    id: 'cr2',
    slug: 'arjun-patel',
    name: 'Arjun Patel',
    role: 'Game reviewer',
    journals: 38,
    accent: CATEGORY_HEX.gaming,
    portrait: IMG.portraitArjun,
  },
  {
    id: 'cr3',
    slug: 'maya-lee',
    name: 'Maya Lee',
    role: 'Photographer',
    journals: 56,
    accent: CATEGORY_HEX.photography,
    portrait: IMG.portraitMaya,
  },
  {
    id: 'cr4',
    slug: 'sneha-kapoor',
    name: 'Sneha Kapoor',
    role: 'Food writer',
    journals: 31,
    accent: CATEGORY_HEX.cooking,
    portrait: IMG.portraitSneha,
  },
  {
    id: 'cr5',
    slug: 'emma-wilson',
    name: 'Emma Wilson',
    role: 'Film & music critic',
    journals: 47,
    accent: CATEGORY_HEX.media,
    portrait: IMG.portraitEmma,
  },
]

export const TRENDING_TODAY = [
  {
    rank: 1,
    slug: 'remote-kindness-protocols',
    title: 'Slack norms that saved our sanity',
    heat: 'Most opened this week',
    accent: CATEGORY_HEX.technology,
    categoryId: 'technology',
  },
  {
    rank: 2,
    slug: 'slow-trains-and-open-tabs',
    title: 'Slow trains & open tabs',
    heat: 'High saves',
    accent: CATEGORY_HEX.travel,
    categoryId: 'travel',
  },
  {
    rank: 3,
    slug: 'boss-fight-metaphor',
    title: 'Boss fights that respect your time',
    heat: 'Gaming picks',
    accent: CATEGORY_HEX.gaming,
    categoryId: 'gaming',
  },
  {
    rank: 4,
    slug: 'recipe-as-memory',
    title: 'Winter broth from dad’s notebook',
    heat: 'Cooking spike',
    accent: CATEGORY_HEX.cooking,
    categoryId: 'cooking',
  },
  {
    rank: 5,
    slug: 'film-grain-as-intention',
    title: 'Why I keep grain in Lightroom',
    heat: 'Photo desk',
    accent: CATEGORY_HEX.photography,
    categoryId: 'photography',
  },
]

export function filterExplorePosts(posts, categoryId, searchQuery) {
  const q = searchQuery.trim().toLowerCase()
  let list = posts
  if (categoryId && categoryId !== 'all') {
    list = list.filter((p) => p.categoryId === categoryId)
  }
  if (!q) return list
  return list.filter((p) => {
    const hay = `${p.title} ${p.excerpt} ${p.author} ${p.tags.join(' ')}`.toLowerCase()
    return hay.includes(q)
  })
}

export function pickRecommended(posts, categoryId, count = 4) {
  const list = [...posts]
  if (!categoryId || categoryId === 'all') {
    return list.slice(0, count)
  }
  const inCat = list.filter((p) => p.categoryId === categoryId)
  if (inCat.length >= count) {
    return inCat.slice(0, count)
  }
  const rest = list.filter((p) => p.categoryId !== categoryId)
  return [...inCat, ...rest].slice(0, count)
}

// Mapping of category id -> image URL (uses images already available in IMG)
export const CATEGORY_IMAGES = {
  technology: IMG.techThumb,
  gaming: IMG.gamingThumb,
  travel: IMG.travelThumb,
  cooking: IMG.cookingThumb,
  'art-drawing': IMG.artThumb,
  productivity: IMG.techThumb,
  lifestyle: IMG.lifestyle,
  photography: IMG.photoThumb,
  business: IMG.workspace,
  media: IMG.photo,
}
