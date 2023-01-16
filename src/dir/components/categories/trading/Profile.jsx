import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5'
import SchoolCard from '../../reusable/SchoolCard'
import CardTwo from '../../screens/big/CardTwo'

function Profile() {
  return (
    <div className="w-full mb-8 md:mb-16">
      <div className="relative flex justify-center pb-8">
        <div
          style={{ zIndex: 20 }}
          className="text-xl  rounded text-white ubuntuMedium blue-bg px-3 py-1 uppercase"
        >
          Trading
        </div>
        <div className="absolute w-full border border-gray-10/25 left-0 top-4 z-10" />
      </div>

      <div className=" w-full bg-white flex-wrap md:flex justify-center items-center">

        <div className="w-full md:w-3/5  justify-center items-center">
          <div className=" h-auto  bg-white px-8 py-4   w-full flex flex-wrap justify-center items-center">
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

        <div className="hidden md:block  mt-12 md:mt-0 md:w-2/5 flex lg:items-center justify-center">
          <SchoolCard />
        </div>

        <div className="w-full flex justify-center items-center space-x-12">
          <div className="text-xl  cursor-pointer ubuntuMedium flex items-center transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <div>
              <IoChevronBackCircle className="blue" size={28} />
            </div>

            <div className="blue hover:text-blue-400">Prev</div>
          </div>
          <div className="text-xl cursor-pointer ubuntuMedium flex items-center transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <div className="blue hover:text-blue-400">Next</div>
            <div>
              <IoChevronForwardCircle className="blue" size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
