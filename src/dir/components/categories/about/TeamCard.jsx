import React from 'react'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import * as images from '../../reusable/Images'

function TeamCard({ fullname, role }) {
  return (
    <div className="w-auto  flex-wrap justify-center items-center   w-72 h-auto  rounded-md">
      <div className=" shadow-xl  focus:shadow-outline shadow-xl  shadow-black/50  rounded-md w-72 h-80 flex-wrap justify-center  items-center  bg-white">
        <div className="flex justify-center px-4 py-3  ">
          <img src={images.user} className="w-20 h-20 rounded-full" />
        </div>
        <div className="px-8 text-center pb-4 DmMedium  tracking-wide leading-loose pt-4 text-xl">
          {fullname}
        </div>
        <div className="opacity-50 px-3 pb-4 DmMedium text-center">{role}</div>
        <div className="flex pt-5 justify-center items-center space-x-5 ">
          <span className="flex justify-center items-center cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <AiFillInstagram size={25} className="text-red-900" />
          </span>

          <span className="flex justify-center items-center cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <BsFacebook size={25} className="blue" />
          </span>

          <span className="flex justify-center items-center cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <AiFillTwitterCircle size={25} className="blue" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
