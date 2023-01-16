import React from 'react'
import CoinProfile from '../../components/categories/crypto/altcoin/CoinProfile'
import Crypto from '../../components/reusable/Crypto'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import SuggestedArticles from '../../components/reusable/SuggestedArticles'

function Altcoins() {
  return (
    <div className="bg-white">
      <Navbar />
      <Crypto coin="altcoin" />
      <CoinProfile />
      <div className="mb-24" />
      <SuggestedArticles />
      <Footer />
    </div>
  )
}

export default Altcoins
