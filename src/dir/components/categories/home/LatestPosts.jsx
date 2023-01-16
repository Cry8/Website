import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Card from '../../screens/big/Card'

function LatestPosts() {
  return (
    <div className=" h-auto  bg-white px-8 py-4   w-full flex-wrap">
      <div className="flex w-full ubuntuBold text-xl md:text-3xl items-center space-x-4">
        <span>LATEST POSTS </span> <AiOutlineArrowRight />
      </div>
      <div className="border border-blue-500 my-1.5 w-full " />

      <div className="w-full   flex-wrap   md:flex items-center justify-around lg:justify-between ">
        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6 lg:w-1/3 justify-center">
          <Card />
        </div>
        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6  lg:w-1/3 justify-around">
          <Card />
        </div>

        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6  lg:w-1/3 justify-around">
          <Card />
        </div>
        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6  lg:w-1/3 justify-center">
          <Card />
        </div>

        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6  lg:w-1/3 justify-center">
          <Card />
        </div>
        <div className="flex md:w-1/2 px-2 lg:px-0 pt-6  lg:w-1/3 justify-center">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
