import { HeroSection } from '../components/home/HeroSection'
import { FloatingFeatured } from '../components/home/FloatingFeatured'
import { TrendingStrip } from '../components/home/TrendingStrip'
import { CategoryShowcase } from '../components/home/CategoryShowcase'
import { CreatorSpotlight } from '../components/home/CreatorSpotlight'
import { RecommendationShowcase } from '../components/home/RecommendationShowcase'
import { NewsletterSection } from '../components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FloatingFeatured />
      <TrendingStrip />
      <CategoryShowcase />
      <CreatorSpotlight />
      <RecommendationShowcase />
      <NewsletterSection />
    </>
  )
}
