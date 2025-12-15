import { CallToAction } from '@/components/cta'
import { FaqsSection } from '@/components/faqs-section'
import FooterSection from '@/components/footer'
import CitiesGravitySection from '@/components/general/(landing)/cities-section'
import FeatureSection from '@/components/general/(landing)/feature-section'
import { PhoneMockupBasic } from '@/components/general/(landing)/phone-mockups'
import { Header } from '@/components/header'
import { LogoCloud } from '@/components/logo-cloud'
import StatsSection from '@/components/stats'
import Testimonials from '@/components/testimonials'
import { HeroSection2 } from '@/components/ui/hero-section-2'
import Team1 from '@/components/ui/team-1'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeroSection2/>
      <div className='space-y-28'>

      <FeatureSection/>
      <Testimonials/>
      <CitiesGravitySection/>
      <StatsSection/>
      <CallToAction/>
      <FaqsSection/>
      </div>

    <FooterSection/>    
      
    </div>
  )
}

export default HomePage
