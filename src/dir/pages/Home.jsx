import React, { Fragment, useState, useEffect } from 'react'
import LatestPosts from '../components/categories/home/LatestPosts'
import MoreArticles from '../components/categories/home/MoreArticles'
import Footer from '../components/reusable/Footer'
import Landing from '../components/screens/big/Landing'
import Youtube from '../components/categories/home/Youtube'
import Navbar from '../components/reusable/Navbar'

function Home() {
  return (
    <Fragment>
      <Navbar />

      <Landing />
      <div className="mt-3" />

      <LatestPosts />
      <div className="mt-3" />

      <MoreArticles />
      <div className="mt-3" />
      <Youtube />
      <Footer />
    </Fragment>
  )
}

export default Home
