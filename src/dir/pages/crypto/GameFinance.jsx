import React from 'react'
import CoinProfile from '../../components/categories/crypto/gamefi/CoinProfile'
import Crypto from '../../components/reusable/Crypto'
import Footer from '../../components/reusable/Footer'
import Navbar from '../../components/reusable/Navbar'
import SuggestedArticles from '../../components/reusable/SuggestedArticles'


function GameFinance() {
  return (
    <div className="bg-white">
    <Navbar />
    <Crypto coin="game finance" />
    <CoinProfile />
    <div className="mb-24" />
    <SuggestedArticles />
    <Footer />
  </div>
  )
}

export default GameFinance