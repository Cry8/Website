import React from 'react'
import Card from '../screens/big/Card'
import SchoolCard from './SchoolCard'

function SuggestedArticles() {
  return (
    <div className="w-full mb-12">
    <div className="relative flex justify-center pb-8">
      <div
        style={{ zIndex: 20 }}
        className="text-xl  rounded text-white DmMedium blue-bg px-3 py-1"
      >
        Suggested Articles
      </div>
      <div className="absolute w-full border border-gray-10/25 left-0 top-4 z-10" />
    </div>

    <div className="w-full h-auto  flex-wrap   md:flex  ">
      <div className="w-full  flex-wrap   md:flex items-center justify-around lg:justify-between  ">
    
        <div className="flex md:w-1/3  pt-6   justify-center px-4">
          <Card status={true} />
        </div>

        <div className="flex md:w-1/3  pt-6   justify-center px-4">
          <Card status={true} />
        </div>
        <div className="flex md:w-1/3   pt-6   justify-center px-4">
          <Card status={true} />
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default SuggestedArticles
