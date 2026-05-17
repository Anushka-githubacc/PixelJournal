/**
 * Canonical blog categories + writing hints for adaptive compose UX (CreateBlog).
 */

import { IMG } from '../data/images'

export const BLOG_CATEGORIES = [
  {
    id: 'technology',
    label: 'Technology',
    accent: 'var(--pj-cat-tech)',
    summary: 'Gear, apps, and workflows explained in plain language.',
    image: IMG.techThumb,
  },
  {
    id: 'gaming',
    label: 'Gaming',
    accent: 'var(--pj-cat-gaming)',
    summary: 'Reviews, setups, and stories from actual play time.',
    image: IMG.gamingThumb,
  },
  {
    id: 'travel',
    label: 'Travel',
    accent: 'var(--pj-cat-travel)',
    summary: 'Trip notes, budgets, and photos from the road.',
    image: IMG.travelThumb,
  },
  {
    id: 'cooking',
    label: 'Cooking',
    accent: 'var(--pj-cat-cooking)',
    summary: 'Recipes you can cook tonight — swaps and timings included.',
    image: IMG.cookingThumb,
  },
  {
    id: 'art-drawing',
    label: 'Art & Drawing',
    accent: 'var(--pj-cat-art)',
    summary: 'Sketches, supplies, and how pieces actually get made.',
    image: IMG.artThumb,
  },
  {
    id: 'productivity',
    label: 'Productivity',
    accent: 'var(--pj-cat-productivity)',
    summary: 'Calendars and habits that fit real life.',
    image: IMG.techThumb,
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    accent: 'var(--pj-cat-lifestyle)',
    summary: 'Home, routines, and everyday moments.',
    image: IMG.lifestyle,
  },
  {
    id: 'photography',
    label: 'Photography',
    accent: 'var(--pj-cat-photo)',
    summary: 'Gear tips, editing notes, and photo walks.',
    image: IMG.photoThumb,
  },
  {
    id: 'business',
    label: 'Business',
    accent: 'var(--pj-cat-business)',
    summary: 'Founders, pricing, and lessons from building.',
    image: IMG.workspace,
  },
  {
    id: 'media',
    label: 'Media',
    accent: 'var(--pj-cat-media)',
    summary: 'Film, music, and podcasts worth your evening.',
    image: IMG.heroCollageC,
  },
]

/** Deep hints keyed by category id — drives future CreateBlog adaptation. */
export const CATEGORY_WRITING_HINTS = {
  travel: {
    suggestions: [
      'Hidden neighborhoods worth missing a flight for',
      'Slow mornings in loud cities',
      'One photograph that changed your itinerary',
    ],
    structure: ['Arrival', 'Paths', 'Encounters', 'Departure note'],
    tips: ['Golden-hour pacing', 'Caption as caption — short, sensory'],
  },
  cooking: {
    suggestions: [
      'The dish that tastes like home',
      'Improv night — what was in the fridge',
      'A technique you finally stopped rushing',
    ],
    structure: ['Ingredients', 'Prep', 'Cook', 'Serve & story'],
    tips: ['Measure intuition in pinches', 'Note substitutions that worked'],
  },
  gaming: {
    suggestions: [
      'Boss fight as metaphor',
      'Sound design that rewrote the room',
      'Co-op night — laughter over loot',
    ],
    structure: ['Premise', 'Gameplay beats', 'Critique', 'Setup tips'],
    tips: ['Clip timestamps for readers', 'Spoiler gates as kindness'],
  },
  'art-drawing': {
    suggestions: [
      'Paper tooth that changed your line',
      'Study from life vs. photo — what shifted',
      'Palette cleanup as creative reset',
    ],
    structure: ['Intent', 'Materials', 'Process', 'Reflection'],
    tips: ['Thumbnail before detail', 'Crop ruthlessly in camera'],
  },
  technology: {
    suggestions: [
      'The workflow that quietly saved weeks',
      'Ethics of convenience',
      'Hardware with personality',
    ],
    structure: ['Context', 'Exploration', 'Trade-offs', 'Takeaways'],
    tips: ['Link primary sources', 'Diagram complex flows'],
  },
  productivity: {
    suggestions: [
      'Energy budgeting vs. time blocking',
      'The ‘no’ that opened a season',
      'Tools you retired on purpose',
    ],
    structure: ['Problem', 'Experiment', 'Results', 'Next tweak'],
    tips: ['Honest failures beat polished hacks'],
  },
  lifestyle: {
    suggestions: [
      'Seasonal swaps that stuck',
      'Spaces that sound different at dusk',
      'Friend rituals across time zones',
    ],
    structure: ['Scene', 'Practice', 'Shift', 'Invitation'],
    tips: ['Sensory anchors — scent, light, sound'],
  },
  photography: {
    suggestions: [
      'Lens choice as narrative choice',
      'Editing as restraint',
      'Street corners that repeat',
    ],
    structure: ['Brief', 'Shoot', 'Edit', 'Series arc'],
    tips: ['EXIF when it teaches', 'Series > single hero shots'],
  },
  business: {
    suggestions: [
      'Pricing as storytelling',
      'Meetings that could have been memos — but weren’t',
      'Pivot told honestly',
    ],
    structure: ['Backdrop', 'Decision', 'Execution', 'Lesson'],
    tips: ['Numbers with narrative', 'Credit collaborators'],
  },
  media: {
    suggestions: [
      'Scene that rewatched you',
      'Album sequencing as essay',
      'Podcast walk that fixed a week',
    ],
    structure: ['Hook', 'Deep dive', 'Craft notes', 'Send-off'],
    tips: ['Timestamp chapters', 'Quote sparingly, cite clearly'],
  },
}

export function getCategoryById(id) {
  return BLOG_CATEGORIES.find((c) => c.id === id)
}
