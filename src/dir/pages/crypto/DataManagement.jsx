import React from 'react'
import CoinProfile from '../../components/categories/crypto/mgt/CoinProfile'
import Crypto from '../../components/reusable/Crypto'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import SuggestedArticles from '../../components/reusable/SuggestedArticles'

function DataManagement() {
  return (
    <div className="bg-white">
      <Navbar />
      <Crypto coin="Data Management" />
      <CoinProfile />
      <div className="mb-24" />
      <SuggestedArticles />
      <Footer />
    </div>
  )
}

export default DataManagement
