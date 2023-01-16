import React from 'react'
import Profile from '../components/categories/author/Profile'
import SuggestedArticles from '../components/reusable/SuggestedArticles'
import UserInfo from '../components/categories/author/UserInfo'
import Footer from '../components/reusable/Footer'
import Navbar from '../components/reusable/Navbar'

function Author() {
  return (
    <div className="bg-white">
      <Navbar />
      <UserInfo />
      <div className='mb-6'/>
      <Profile />
      <div className='mb-24'/>
      <SuggestedArticles />
      <Footer />
    </div>
  )
}

export default Author
