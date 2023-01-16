import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import SchoolCard from '../../reusable/SchoolCard'
import CardTwo from '../../screens/big/CardTwo'

function MoreArticles() {
  return (
    <div className=" w-full bg-white flex-wrap md:flex justify-center items-center">
      <div className="w-full md:w-3/5  justify-center items-center">
        <div className=" h-auto  bg-white px-8 py-4   w-full flex flex-wrap justify-center items-center">
          <div className="flex w-full ubuntuBold     text-base md:text-2xl items-center space-x-4">
            <span>MORE ARTICLES </span> <AiOutlineArrowRight />
          </div>
          <div className="border border-blue-500 my-3 w-full " />

          <div className="w-full   flex-wrap    items-center justify-around lg:justify-between ">
            <div className="flex flex-1 justify-center ">
              <CardTwo />
            </div>

            <div className="flex flex-1 justify-center ">
              <CardTwo />
            </div>

            <div className="flex flex-1 justify-center ">
              <CardTwo />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 md:mt-0 md:w-2/5 flex items-center justify-center">
        <SchoolCard />
      </div>
    </div>
  )
}

export default MoreArticles
