import React from 'react'
import Profile from '../components/categories/tradingideas/Profile'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'
import SuggestedArticles from '../components/reusable/SuggestedArticles'

function TradingIdeas() {
  return (
    <div className="bg-white">
      <Navbar />
      <Profile />
      <div className="mb-24" />
      <SuggestedArticles />
      <Footer />
    </div>
  )
}

export default TradingIdeas
