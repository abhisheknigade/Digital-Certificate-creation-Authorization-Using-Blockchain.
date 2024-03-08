import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import TeamMembers from './TeamMembers/TeamMembers'
import ContactUs from './ContactUs/ContactUs'
import WhyUs from './WhyUs/WhyUs'
import Footer from './Footer/Footer'

const HomePage = () => {
  return (
    <>
        <HeroSection />
        <WhyUs />
        <TeamMembers />
        <ContactUs />
        <Footer />
    </>
  )
}

export default HomePage