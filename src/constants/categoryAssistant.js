/**
 * Extended assistant copy per category — merged with CATEGORY_WRITING_HINTS for CreateBlog.
 * Keeps editorial hints in one consumable shape for the smart panel.
 */

import { CATEGORY_WRITING_HINTS } from './categories'

const EXTRA = {
  technology: {
    titleIdeas: [
      'The tool that replaced three rituals',
      'Notes from a skeptical early adopter',
      'When the stack stopped whispering back',
    ],
    suggestedTags: ['workflow', 'ethics', 'hardware', 'CLI', 'future of work', 'debug diary'],
    contentIdeas: [
      'Trace one bug from symptom to root cause',
      'Compare two tools as personalities, not feature matrices',
      'Document a migration weekend hour by hour',
    ],
    formattingIdeas: [
      'Lead with the user problem, not the spec sheet',
      'Use callouts for dangerous assumptions',
      'End with a small experiment readers can try today',
    ],
  },
  gaming: {
    titleIdeas: [
      'Boss fights as punctuation marks',
      'Co-op night — loot secondary, laughter primary',
      'Difficulty as hospitality',
    ],
    suggestedTags: ['review', 'sound design', 'co-op', 'indie', 'boss fight', 'accessibility'],
    contentIdeas: [
      'Minute-by-minute of the encounter that broke you (in a good way)',
      'Compare pacing to a film scene you love',
      'Write the patch notes you wish shipped',
    ],
    formattingIdeas: [
      'Spoiler vault: hide late-game beats behind a gentle gate',
      'Timestamp memorable beats for readers jumping in',
      'Split critique into feel / systems / audio',
    ],
    ratingIdeas: [
      'Score honestly, then explain the one metric that mattered most',
      'Rate generosity of tutorials separately from challenge',
      'Compare to a mood sibling title, not a Metacritic neighbor',
    ],
    setupIdeas: [
      'Capture controller layout & invert-Y loyalty',
      'Note display mode (performance vs fidelity) — it changes the review',
      'Headphones vs speakers — where the mix shines',
    ],
  },
  travel: {
    titleIdeas: [
      'Slow trains & open tabs',
      'Postcards I never sent',
      'One neighborhood, four mornings',
    ],
    suggestedTags: ['itinerary', 'film diary', 'street food', 'golden hour', 'solo trip', 'slow travel'],
    contentIdeas: [
      'Map a single day by light: dawn kiosk to midnight platform',
      'Interview the city through overheard fragments',
      'Pick one walking loop and repeat it until it confesses',
    ],
    formattingIdeas: [
      'Use subheads as stops along a route',
      'Pair micro-maps with sensory timestamps',
      'Close with a departure note — not a summary',
    ],
    destinationIdeas: [
      'Choose a hub quarter vs tourist postcard angle',
      'Write the city through transit etiquette',
      'Follow one river or tram line end to end',
    ],
    photographyIdeas: [
      'Shoot the same corner at three temperatures of light',
      'Foreground clutter as honest texture',
      'Keep captions haiku-short — let images exhale',
    ],
  },
  cooking: {
    titleIdeas: [
      'The broth that remembers winter',
      'Improv night — pantry confessions',
      'Knife skills as meditation',
    ],
    suggestedTags: ['recipe', 'comfort food', 'seasonal', 'technique', 'meal prep', 'family table'],
    contentIdeas: [
      'Document substitutions that saved the night',
      'Write the mise en place as choreography',
      'Record sound: sizzle, chop, lid lift',
    ],
    formattingIdeas: [
      'Ingredients as poetry block — weights + intuition margin',
      'Prep timers woven into narrative beats',
      'Finish with a plate photo and a single regret',
    ],
    ingredientsLayout: [
      'Group by station: wet / dry / garnish',
      'Note swap-friendly anchors (acid, fat, heat)',
      'Mark optional flair separately from essentials',
    ],
    preparationGuidance: [
      'Break prep into breaths — mise, heat, finish',
      'Call out the irreversible step early',
      'Reserve one sensory sentence per phase',
    ],
  },
  'art-drawing': {
    titleIdeas: [
      'Graphite first, color later',
      'Study hall with bad coffee',
      'Eraser as editor',
    ],
    suggestedTags: ['process', 'materials', 'sketchbook', 'figure', 'palette', 'study'],
    contentIdeas: [
      'Photograph five stages — refuse the hero shot only',
      'Write the hesitation before line one',
      'Compare reference sources — life vs photo tension',
    ],
    formattingIdeas: [
      'Embed thumbnails as a rhythm, not decoration',
      'Caption tools like characters (paper tooth, grit, tooth)',
      'End with next-session cliffhanger',
    ],
    materialIdeas: [
      'Cold press vs hot — how tooth changes tempo',
      'One brush or pencil worth overrunning your budget',
      'Paper size as compositional constraint',
    ],
    inspirationPrompts: [
      'Draw the sound of your room today',
      'Steal a silhouette from film — reinterpret in ink',
      'Negative space diary — three days, same object',
    ],
  },
  productivity: {
    titleIdeas: [
      'Energy budgeting beat time blocking',
      'The calendar apology tour',
      'Tools I retired on purpose',
    ],
    suggestedTags: ['focus', 'rituals', 'systems', 'attention', 'calendar', 'deep work'],
    contentIdeas: [
      'Track interruptions without shame — patterns emerge',
      "Write the honest weekly review you'd publish",
      'Contrast two rituals: one fragile, one stubborn',
    ],
    formattingIdeas: [
      'Use gentle metrics — streaks optional',
      'Separate ideals from lived defaults',
      'Invite readers to remix, not copy',
    ],
  },
  lifestyle: {
    titleIdeas: [
      'Seasonal swaps that stayed',
      'Blue hour routines',
      'Letters to the corner store',
    ],
    suggestedTags: ['rituals', 'home', 'seasons', 'slow living', 'friendship', 'spaces'],
    contentIdeas: [
      'Soundtrack one ordinary Tuesday',
      'Follow light through your rooms',
      'Write a friendship maintenance snippet — unsent but kind',
    ],
    formattingIdeas: [
      'Keep paragraphs breathable — lifestyle loves air',
      'Swap bullet lists for vignettes',
      'Close with an invitation, not advice',
    ],
  },
  photography: {
    titleIdeas: [
      'Lens choice as narrative choice',
      'Corner repeats — same street, softer ego',
      'Editing as restraint diary',
    ],
    suggestedTags: ['composition', 'street', 'portrait', 'film', 'light', 'series'],
    contentIdeas: [
      'Pick one focal length for a week — refuse zoom temptation',
      'Document editing sliders you refused to touch',
      'Series arc: shoot a motif until it tires you — stop there',
    ],
    formattingIdeas: [
      'Pair images as couples — dialogue, not gallery spam',
      'Share EXIF only when it teaches',
      'Caption with verbs — drift, graze, hesitate',
    ],
  },
  business: {
    titleIdeas: [
      'Pricing as storytelling',
      'Pivot told without varnish',
      'Meeting that earned its oxygen',
    ],
    suggestedTags: ['strategy', 'teams', 'pricing', 'founders', 'customers', 'ops'],
    contentIdeas: [
      'Tell one revenue decision as a scene',
      'Credit collaborators by contribution, not title',
      'Share numbers with narrative guardrails',
    ],
    formattingIdeas: [
      'Separate opinion from observed fact cleanly',
      'Use footnotes for caveats — keep body readable',
      'End with open questions, not slogans',
    ],
  },
  media: {
    titleIdeas: [
      'Scene that rewatched me',
      'Album sequencing as essay',
      'Credits worth staying for',
    ],
    suggestedTags: ['film', 'music', 'podcast', 'essay', 'sound', 'scene work'],
    contentIdeas: [
      'Describe a sound cue that moved plot without dialogue',
      'Compare directors as editors of silence',
      'Podcast walk — transcript of thoughts, not quotes',
    ],
    formattingIdeas: [
      'Timestamp chapters for long reads',
      'Quote sparingly — paraphrase lovingly',
      'Offer watch/listen order as curated ritual',
    ],
  },
}

/**
 * @param {string} categoryId
 * @returns {{
 *   prompts: string[],
 *   structure: string[],
 *   craftTips: string[],
 *   titleIdeas: string[],
 *   suggestedTags: string[],
 *   contentIdeas: string[],
 *   formattingIdeas: string[],
 *   ratingIdeas?: string[],
 *   setupIdeas?: string[],
 *   destinationIdeas?: string[],
 *   photographyIdeas?: string[],
 *   ingredientsLayout?: string[],
 *   preparationGuidance?: string[],
 *   materialIdeas?: string[],
 *   inspirationPrompts?: string[],
 * }}
 */
export function getWritingAssistant(categoryId) {
  const base = CATEGORY_WRITING_HINTS[categoryId]
  const extra = EXTRA[categoryId] ?? {}

  return {
    prompts: base?.suggestions ?? [],
    structure: base?.structure ?? [],
    craftTips: base?.tips ?? [],
    titleIdeas: extra.titleIdeas ?? [],
    suggestedTags: extra.suggestedTags ?? [],
    contentIdeas: extra.contentIdeas ?? [],
    formattingIdeas: extra.formattingIdeas ?? [],
    ...(extra.ratingIdeas ? { ratingIdeas: extra.ratingIdeas } : {}),
    ...(extra.setupIdeas ? { setupIdeas: extra.setupIdeas } : {}),
    ...(extra.destinationIdeas ? { destinationIdeas: extra.destinationIdeas } : {}),
    ...(extra.photographyIdeas ? { photographyIdeas: extra.photographyIdeas } : {}),
    ...(extra.ingredientsLayout ? { ingredientsLayout: extra.ingredientsLayout } : {}),
    ...(extra.preparationGuidance ? { preparationGuidance: extra.preparationGuidance } : {}),
    ...(extra.materialIdeas ? { materialIdeas: extra.materialIdeas } : {}),
    ...(extra.inspirationPrompts ? { inspirationPrompts: extra.inspirationPrompts } : {}),
  }
}
