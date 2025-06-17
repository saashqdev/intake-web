import { AnimatedBeamSection } from '@/components/home/animated-beam'
import { FeatureSection } from '@/components/home/cards'
import CtaSection from '@/components/home/cta'
import FaqSection from '@/components/home/faqs'
import { HeroSection } from '@/components/home/hero'
import { IconCloudSection } from '@/components/home/icon-cloud'
import { TabsSection } from '@/components/home/tabs'
import TestimonialSection from '@/components/home/testimonial'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TabsSection />
      <FeatureSection />
      <AnimatedBeamSection />
      <TestimonialSection />
      <FaqSection />
      <IconCloudSection />
      <CtaSection />
    </>
  )
}

export default HomePage
