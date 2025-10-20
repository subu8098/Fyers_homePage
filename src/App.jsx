import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import FeaturesBar from './components/FeaturesBar.jsx'
import TradeLikeProSection from './components/Trade-pro.jsx'
import TradeAnywhereSection from './components/TradeAnywhereSection.jsx'
import PricingSection from './components/pricing.jsx'
import MeetFIASection from './components/meet-fia.jsx'
import TrustSection from './components/trustSection.jsx'
import DataSection from './components/dataSection.jsx'
import FaqSection from './components/faqSection.jsx'
import Footer from './components/footerSection.jsx'

function App() {  

  return (
    <>
      <div className="min-h-screen bg-[#fff]">
          <Navbar />
          <HeroSection />
          <FeaturesBar />
          <TradeLikeProSection />
          <TradeAnywhereSection />
          <PricingSection />
          <MeetFIASection />
          <TrustSection />
          <DataSection />
          <FaqSection />
          <Footer />
          
      </div>

    </>
  )
}

export default App
