import { useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { CategoryFilters } from '../components/explore/CategoryFilters'
import { CreatorsStrip } from '../components/explore/CreatorsStrip'
import { EditorialShowcase } from '../components/explore/EditorialShowcase'
import { ExploreHero } from '../components/explore/ExploreHero'
import { ExploreSearch } from '../components/explore/ExploreSearch'
import { RecommendedSection } from '../components/explore/RecommendedSection'
import { TrendingTags } from '../components/explore/TrendingTags'
import { TrendingToday } from '../components/explore/TrendingToday'
import { BLOG_CATEGORIES } from '../constants/categories'
import {
  CATEGORY_MOOD,
  EXPLORE_CREATORS,
  EXPLORE_POSTS,
  filterExplorePosts,
  pickRecommended,
  RECOMMENDED_MOOD,
  TRENDING_TAGS,
  TRENDING_TODAY,
} from '../data/exploreMock'
import './Explore.css'

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')

  const activeCategory = useMemo(() => {
    const cat = searchParams.get('cat')
    if (!cat) return 'all'
    return BLOG_CATEGORIES.some((c) => c.id === cat) ? cat : 'all'
  }, [searchParams])

  const setCategory = useCallback(
    (id) => {
      if (id === 'all') {
        setSearchParams({})
      } else {
        setSearchParams({ cat: id })
      }
    },
    [setSearchParams],
  )

  const mood = CATEGORY_MOOD[activeCategory] ?? CATEGORY_MOOD.all
  const moodCopy = RECOMMENDED_MOOD[activeCategory] ?? RECOMMENDED_MOOD.all

  const filteredPosts = useMemo(
    () => filterExplorePosts(EXPLORE_POSTS, activeCategory, query),
    [activeCategory, query],
  )

  const recommendedPosts = useMemo(
    () => pickRecommended(EXPLORE_POSTS, activeCategory, 4),
    [activeCategory],
  )

  const trendingToday = useMemo(() => {
    if (activeCategory === 'all') return TRENDING_TODAY
    const scoped = TRENDING_TODAY.filter((t) => t.categoryId === activeCategory)
    return scoped.length ? scoped : TRENDING_TODAY.slice(0, 4)
  }, [activeCategory])

  const handleTagClick = useCallback((tag) => {
    setQuery((prev) => {
      const lower = tag.toLowerCase()
      if (prev.toLowerCase().includes(lower)) return prev
      return prev ? `${prev} ${tag}` : tag
    })
  }, [])

  return (
    <motion.div
      className="pj-explore"
      initial={{ opacity: 0.96 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        key={activeCategory}
        className="pj-explore__wash"
        style={{ background: mood.surface }}
      />

      <div className="pj-explore__grain" aria-hidden />

      <Container>
        <ExploreHero mood={mood} categoryKey={activeCategory} />
        <ExploreSearch value={query} onChange={setQuery} />
        <TrendingTags tags={TRENDING_TAGS} activeQuery={query} onTagClick={handleTagClick} />
        <CategoryFilters activeId={activeCategory} onChange={setCategory} />
        <CreatorsStrip creators={EXPLORE_CREATORS} />
        <EditorialShowcase posts={filteredPosts} categoryKey={activeCategory} />
        <RecommendedSection moodCopy={moodCopy} posts={recommendedPosts} />
        <TrendingToday items={trendingToday} />
      </Container>
    </motion.div>
  )
}
