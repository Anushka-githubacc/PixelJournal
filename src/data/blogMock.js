/**
 * Unified blog content — listings + article bodies for BlogDetails.
 * Replace with API / Firebase later.
 */

import { CATEGORY_HEX } from '../constants/categoryHex'
import { IMG } from './images'

export const AUTHORS = {
  aanya: {
    id: 'aanya',
    name: 'Sophia Kim',
    role: 'Travel blogger',
    avatar: IMG.portraitAanya,
    bio: 'Travel and budget guides from Mumbai. Trains, street food, real ticket prices.',
    slug: 'aanya-shah',
  },
  rohan: {
    id: 'rohan',
    name: 'Rohan Mehta',
    role: 'Tech writer',
    avatar: IMG.portraitRohan,
    bio: 'Remote teams, Slack norms, and tools that survive contact with reality.',
    slug: 'rohan-mehta',
  },
  sneha: {
    id: 'sneha',
    name: 'Sneha Kapoor',
    role: 'Food writer',
    avatar: IMG.portraitSneha,
    bio: 'Home cooking with substitutions — North Indian roots, apartment kitchen.',
    slug: 'sneha-kapoor',
  },
  arjun: {
    id: 'arjun',
    name: 'Lucas Reed',
    role: 'Game reviewer',
    avatar: IMG.portraitArjun,
    bio: 'PC + PS5. Honest difficulty talk and spoiler-safe sections.',
    slug: 'arjun-patel',
  },
  kavya: {
    id: 'kavya',
    name: 'Kavya Iyer',
    role: 'Artist',
    avatar: IMG.portraitKavya,
    bio: 'Sketchbooks, gouache, and teaching evening classes in Bengaluru.',
    slug: 'kavya-iyer',
  },
  maya: {
    id: 'maya',
    name: 'Maya Lee',
    role: 'Photographer',
    avatar: IMG.portraitMaya,
    bio: 'Street and portrait work in Seoul & Vancouver.',
    slug: 'maya-lee',
  },
  emma: {
    id: 'emma',
    name: 'Emma Wilson',
    role: 'Media critic',
    avatar: IMG.portraitEmma,
    bio: 'Albums and films — tracklists and scenes worth pausing.',
    slug: 'emma-wilson',
  },
  daniel: {
    id: 'daniel',
    name: 'Daniel Kim',
    role: 'Founder & writer',
    avatar: IMG.portraitDaniel,
    bio: 'Bootstrapped SaaS from Toronto. Shares pricing experiments.',
    slug: 'daniel-kim',
  },
}

function defaultComments() {
  return [
    {
      id: 'c1',
      avatar: IMG.portraitEmma,
      date: 'Mar 14, 2026',
      text: 'This section on budgeting tickets was exactly what I needed.',
    },
    {
      id: 'c2',
      author: 'Daniel Kim',
      avatar: IMG.portraitDaniel,
      date: 'Mar 14, 2026',
      text: 'Saved for my next trip — thanks for the honest wifi notes.',
    },
  ]
}

function defaultBody(excerpt) {
  return [
    {
      type: 'p',
      text:
        excerpt ||
        'PixelJournal runs entirely in the browser for this demo. Hook up Firebase when you are ready for live drafts and comments.',
    },
    {
      type: 'h2',
      text: 'What to try next',
    },
    {
      type: 'p',
      text:
        'Share this post, bookmark it on your Saved page, or remix the outline in Create — category prompts adapt to how you write.',
    },
    {
      type: 'ul',
      items: ['Break long trips into daily headings', 'Add photos every 3–4 paragraphs', 'End with one takeaway readers can copy'],
    },
  ]
}

/** Full catalog — used on Explore + internally */
export const EXPLORE_POSTS = [
  {
    id: 'p1',
    slug: 'slow-trains-and-open-tabs',
    title: 'Slow trains & open tabs',
    excerpt:
      'A week in Japan on rail passes — what I spent, where I sat, and one essay I wrote offline.',
    author: AUTHORS.aanya.name,
    authorId: 'aanya',
    categoryId: 'travel',
    readTime: '8 min',
    accent: CATEGORY_HEX.travel,
    tags: ['Japan', 'rail pass'],
    reads: '14.2k',
    coverImage: IMG.travel,
    publishedAt: 'March 12, 2026',
    body: [
      {
        type: 'p',
        text:
          'I promised myself one week without Slack. The trains still had Wi‑Fi, but I kept the laptop closed until Osaka. Here is the route, seat choices, and yen breakdown so you can copy the trip without guessing.',
      },
      { type: 'h2', text: 'Tickets that were worth it' },
      {
        type: 'p',
        text:
          'JR Pass for seven days, reserved seats on the Tokaido only twice — mornings toward Kyoto when luggage mattered. Other legs I winged unreserved and always found a window.',
      },
      {
        type: 'figure',
        src: IMG.travel,
        caption: 'Hikari service — afternoon light, car 8 row D.',
      },
      {
        type: 'p',
        text:
          'Offline tip: download maps for Tokyo and Kyoto prefectures before you leave the hotel. I wrote the draft for this post in Apple Notes on the phone and pasted into PixelJournal later.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p2',
    slug: 'recipe-as-memory',
    title: 'Winter broth from dad’s notebook',
    excerpt: 'Chicken soup with toasted cumin — timers, substitutions, and what not to skip.',
    author: AUTHORS.sneha.name,
    authorId: 'sneha',
    categoryId: 'cooking',
    readTime: '6 min',
    accent: CATEGORY_HEX.cooking,
    tags: ['soup', 'weeknight'],
    reads: '9.1k',
    coverImage: IMG.cookingThumb,
    publishedAt: 'Feb 28, 2026',
    body: [
      {
        type: 'p',
        text:
          'This is not a thin broth — it is the one we make when someone has a cold or when Mumbai turns unexpectedly cool. Dad measured nothing; I timed everything.',
      },
      { type: 'h2', text: 'Ingredients (serves 4)' },
      {
        type: 'ul',
        items: [
          '1 kg bone-in chicken thighs',
          '2 onions, rough dice',
          '1 tbsp cumin toasted in dry pan',
          'Salt and pepper — taste after 40 minutes',
        ],
      },
      {
        type: 'figure',
        src: IMG.cooking,
        caption: 'Simmer — skim foam for the first 15 minutes.',
      },
      {
        type: 'p',
        text:
          'Substitution I actually use: vegetable oil instead of ghee when I run out. It changes finish slightly but family never notices.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p3',
    slug: 'palette-night-sketches',
    title: 'Graphite first — color later',
    excerpt: 'A Tuesday night routine: one still life, three thumbnails, stop before midnight.',
    author: AUTHORS.kavya.name,
    authorId: 'kavya',
    categoryId: 'art-drawing',
    readTime: '5 min',
    accent: CATEGORY_HEX['art-drawing'],
    tags: ['sketchbook', 'still life'],
    reads: '7.8k',
    coverImage: IMG.artThumb,
    publishedAt: 'March 3, 2026',
    body: [
      {
        type: 'p',
        text:
          'Color hides bad drawing faster than graphite. These nights are ugly on purpose — wrong proportions stay visible until I fix structure.',
      },
      {
        type: 'figure',
        src: IMG.art,
        caption: 'Still life setup — desk lamp + fruit from the corner shop.',
      },
      {
        type: 'p',
        text:
          'Paper: cheap cellulose block so I do not baby the sheet. Pencil: 2B then 4B for shadows; erase with kneaded only where highlights sit.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p4',
    slug: 'co-op-as-conversation',
    title: 'Co-op sessions that feel like voice chat',
    excerpt: 'Party mechanics that reward talking — not grind.',
    author: AUTHORS.arjun.name,
    authorId: 'arjun',
    categoryId: 'gaming',
    readTime: '9 min',
    accent: CATEGORY_HEX.gaming,
    tags: ['co-op', 'PC'],
    reads: '12.4k',
    coverImage: IMG.gamingThumb,
    publishedAt: 'March 8, 2026',
    body: [
      {
        type: 'p',
        text:
          'Voice chat matters as much as mechanics when you are carrying a friend through a hard chapter. Here are three co-op games where downtime still feels fun.',
      },
      {
        type: 'figure',
        src: IMG.gaming,
        caption: 'DualSense + desktop rig — latency notes in post.',
      },
      {
        type: 'h2',
        text: 'Ping-friendly picks',
      },
      {
        type: 'p',
        text: 'We measured input lag on the same TV — numbers inside, plus honest GPU notes for PC.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p5',
    slug: 'film-grain-as-intention',
    title: 'Why I keep grain in Lightroom',
    excerpt: 'Noise reduction is not always “better.” Product shots vs street.',
    author: AUTHORS.maya.name,
    authorId: 'maya',
    categoryId: 'photography',
    readTime: '7 min',
    accent: CATEGORY_HEX.photography,
    tags: ['Lightroom', 'street'],
    reads: '9.8k',
    coverImage: IMG.photoThumb,
    publishedAt: 'Jan 22, 2026',
    body: [
      {
        type: 'p',
        text:
          'Clients ask for clean files — personal work keeps texture. Here is when I slide luminance vs color noise, and presets I actually export.',
      },
      {
        type: 'figure',
        src: IMG.photo,
        caption: 'Before / after — subtle grain retained.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p6',
    slug: 'remote-kindness-protocols',
    title: 'Slack norms that saved our sanity',
    excerpt: 'Three reply templates and one rule about @mentions — stolen from teams that ship.',
    author: AUTHORS.rohan.name,
    authorId: 'rohan',
    categoryId: 'technology',
    readTime: '11 min',
    accent: CATEGORY_HEX.technology,
    tags: ['remote work', 'Slack'],
    reads: '18.2k',
    coverImage: IMG.techThumb,
    publishedAt: 'March 1, 2026',
    body: [
      {
        type: 'p',
        text:
          'No buzzword toolkit — just habits we adopted after burning out in 2024. Includes reaction emoji policy (yes, really) and how we batch stand-ups.',
      },
      {
        type: 'figure',
        src: IMG.tech,
        caption: 'Desk shot — ultrawide + notes app forever open.',
      },
      {
        type: 'h2',
        text: 'The @channel rule',
      },
      {
        type: 'p',
        text:
          'One channel-wide ping per day unless production is down. Everything else threads or DMs. Sounds strict — reply anxiety dropped within a week.',
      },
    ],
    comments: defaultComments(),
  },
  {
    id: 'p7',
    slug: 'pricing-as-story',
    title: 'How we raised prices without a backlash',
    excerpt: 'SaaS pricing email — what we said, what customers replied.',
    author: AUTHORS.daniel.name,
    authorId: 'daniel',
    categoryId: 'business',
    readTime: '10 min',
    accent: CATEGORY_HEX.business,
    tags: ['SaaS', 'pricing'],
    reads: '6.4k',
    coverImage: IMG.workspace,
    publishedAt: 'Feb 10, 2026',
    body: defaultBody('Transparent tiers beat surprise invoices — we grandfathered annuals for 90 days.'),
    comments: defaultComments(),
  },
  {
    id: 'p8',
    slug: 'seasonal-swap-diary',
    title: 'Three swaps that survived January',
    excerpt: 'Capsule wardrobe + coffee ritual — what stuck.',
    author: AUTHORS.aanya.name,
    authorId: 'aanya',
    categoryId: 'lifestyle',
    readTime: '6 min',
    accent: CATEGORY_HEX.lifestyle,
    tags: ['habits', 'home'],
    reads: '5.2k',
    coverImage: IMG.lifestyle,
    publishedAt: 'Jan 5, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p9',
    slug: 'album-sequence-essay',
    title: 'Why track 4 hits harder after track 3',
    excerpt: 'Sequencing albums like essays — picks from 2025 releases.',
    author: AUTHORS.emma.name,
    authorId: 'emma',
    categoryId: 'media',
    readTime: '12 min',
    accent: CATEGORY_HEX.media,
    tags: ['music', 'essay'],
    reads: '8.9k',
    coverImage: IMG.lifestyle,
    publishedAt: 'Dec 18, 2025',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p10',
    slug: 'calendar-apology-tour',
    title: 'I deleted recurring meetings for two weeks',
    excerpt: 'What broke, what improved — calendar audit honest version.',
    author: AUTHORS.rohan.name,
    authorId: 'rohan',
    categoryId: 'productivity',
    readTime: '8 min',
    accent: CATEGORY_HEX.productivity,
    tags: ['calendar', 'focus'],
    reads: '11k',
    coverImage: IMG.workspace,
    publishedAt: 'Feb 2, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p11',
    slug: 'corner-store-letters',
    title: 'Letters I almost sent to the corner store',
    excerpt: 'Short neighbourhood notes — humour + gratitude.',
    author: AUTHORS.aanya.name,
    authorId: 'aanya',
    categoryId: 'lifestyle',
    readTime: '5 min',
    accent: CATEGORY_HEX.lifestyle,
    tags: ['Mumbai', 'essay'],
    reads: '4.1k',
    coverImage: IMG.lifestyle,
    publishedAt: 'Mar 6, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p12',
    slug: 'boss-fight-metaphor',
    title: 'Boss fights that respect your time',
    excerpt: 'Checkpoints, gear gates, and games that teach rhythm.',
    author: AUTHORS.arjun.name,
    authorId: 'arjun',
    categoryId: 'gaming',
    readTime: '14 min',
    accent: CATEGORY_HEX.gaming,
    tags: ['difficulty', 'design'],
    reads: '15.6k',
    coverImage: IMG.gamingThumb,
    publishedAt: 'Feb 20, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p13',
    slug: 'workflow-quiet-weeks',
    title: 'Automation without losing craft',
    excerpt: 'Scripts I actually run weekly — not a Zettelkasten lecture.',
    author: AUTHORS.rohan.name,
    authorId: 'rohan',
    categoryId: 'technology',
    readTime: '9 min',
    accent: CATEGORY_HEX.technology,
    tags: ['automation', 'CLI'],
    reads: '21k',
    coverImage: IMG.techThumb,
    publishedAt: 'Jan 30, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p14',
    slug: 'film-scene-rewatch',
    title: 'One scene I paused twelve times',
    excerpt: 'Blocking and sound in a single hallway shot.',
    author: AUTHORS.emma.name,
    authorId: 'emma',
    categoryId: 'media',
    readTime: '11 min',
    accent: CATEGORY_HEX.media,
    tags: ['film', 'essay'],
    reads: '7.2k',
    coverImage: IMG.photoThumb,
    publishedAt: 'Nov 8, 2025',
    body: defaultBody(),
    comments: defaultComments(),
  },
  {
    id: 'p15',
    slug: 'negative-space-diary',
    title: 'Negative space diary — three days',
    excerpt: 'Same mug, different shadows — quick charcoal exercise.',
    author: AUTHORS.kavya.name,
    authorId: 'kavya',
    categoryId: 'art-drawing',
    readTime: '6 min',
    accent: CATEGORY_HEX['art-drawing'],
    tags: ['charcoal', 'study'],
    reads: '5.9k',
    coverImage: IMG.artThumb,
    publishedAt: 'Feb 14, 2026',
    body: defaultBody(),
    comments: defaultComments(),
  },
]

export const featuredPosts = EXPLORE_POSTS.filter((p) =>
  ['p1', 'p2', 'p3'].includes(p.id),
).map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  author: p.author,
  categoryId: p.categoryId,
  readTime: p.readTime,
  accent: p.accent,
  coverImage: p.coverImage,
}))

export const trendingPosts = [
  {
    slug: 'co-op-as-conversation',
    title: 'Co-op sessions that feel like voice chat',
    author: AUTHORS.arjun.name,
    categoryId: 'gaming',
    reads: '12.4k',
    thumb: IMG.gamingThumb,
  },
  {
    slug: 'film-grain-as-intention',
    title: 'Why I keep grain in Lightroom',
    author: AUTHORS.maya.name,
    categoryId: 'photography',
    reads: '9.8k',
    thumb: IMG.photoThumb,
  },
  {
    slug: 'remote-kindness-protocols',
    title: 'Slack norms that saved our sanity',
    author: AUTHORS.rohan.name,
    categoryId: 'technology',
    reads: '18.2k',
    thumb: IMG.techThumb,
  },
]

export const spotlightCreators = [
  {
    id: 'c1',
    name: AUTHORS.aanya.name,
    role: AUTHORS.aanya.role,
    bio: AUTHORS.aanya.bio,
    accent: CATEGORY_HEX.travel,
    portrait: AUTHORS.aanya.avatar,
  },
  {
    id: 'c2',
    name: AUTHORS.arjun.name,
    role: AUTHORS.arjun.role,
    bio: AUTHORS.arjun.bio,
    accent: CATEGORY_HEX.gaming,
    portrait: AUTHORS.arjun.avatar,
  },
  {
    id: 'c3',
    name: AUTHORS.maya.name,
    role: AUTHORS.maya.role,
    bio: AUTHORS.maya.bio,
    accent: CATEGORY_HEX.photography,
    portrait: AUTHORS.maya.avatar,
  },
]

export function getBlogPost(slug) {
  const raw = EXPLORE_POSTS.find((p) => p.slug === slug)
  if (!raw) {
    return {
      slug,
      title: slug.replace(/-/g, ' '),
      excerpt: 'This journal entry will load from your CMS once connected.',
      author: 'PixelJournal',
      authorId: null,
      categoryId: 'lifestyle',
      readTime: '5 min',
      accent: CATEGORY_HEX.lifestyle,
      tags: [],
      reads: '—',
      coverImage: IMG.workspace,
      publishedAt: '—',
      body: defaultBody(),
      comments: [],
      authorProfile: {
        name: 'PixelJournal',
        avatar: IMG.portraitEmma,
        bio: 'Demo editorial account.',
        role: 'Team',
      },
    }
  }
  const profile = raw.authorId ? AUTHORS[raw.authorId] : null
  return {
    ...raw,
    body: raw.body ?? defaultBody(raw.excerpt),
    comments: raw.comments ?? defaultComments(),
    authorProfile: profile ?? {
      name: raw.author,
      avatar: IMG.portraitRohan,
      bio: 'PixelJournal creator.',
      role: 'Writer',
    },
  }
}

export function getRelatedPosts(categoryId, excludeSlug, limit = 3) {
  return EXPLORE_POSTS.filter((p) => p.categoryId === categoryId && p.slug !== excludeSlug).slice(
    0,
    limit,
  )
}

/** Saved page — curated subset */
export const SAVED_COLLECTIONS = [
  {
    id: 'reads',
    label: 'Weekend reads',
    slugs: ['slow-trains-and-open-tabs', 'recipe-as-memory', 'remote-kindness-protocols'],
  },
  {
    id: 'games-media',
    label: 'Games & media',
    slugs: ['co-op-as-conversation', 'album-sequence-essay', 'boss-fight-metaphor'],
  },
]
