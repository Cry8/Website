import React from 'react'
import CoinProfile from '../../components/categories/crypto/privacynetwork/CoinProfile'
import Crypto from '../../components/reusable/Crypto'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import SuggestedArticles from '../../components/reusable/SuggestedArticles'

function PrivacyNetworks() {
  return (
    <div className="bg-white">
    <Navbar />
    <Crypto coin="Privacy Networks" />
    <CoinProfile />
    <div className="mb-24" />
    <SuggestedArticles />
    <Footer />
  </div>
  )
}

export default PrivacyNetworks
