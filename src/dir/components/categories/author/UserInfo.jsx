import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import * as images from '../../reusable/Images'

function UserInfo() {
  return (
    <div className="w-full h-auto flex justify-center items-center py-8">
      <div className="w-full flex justify-center items-center">
          <div className="text-center space-y-3 ">
            <div className='mb-4 flex justify-center items-center'>
                <img src={images.user} className="rounded-full h-20 w-20 md:h-28 md:w-28 border border-2 border-gray-100" />
            </div>
            <div className="ubuntuMedium text-2xl flex-wrap justify- center">
              fullname
            </div>
            <div className='flex justify-center items-center space-x-4'>
                <BsFacebook  className='blue hover:cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110' size={20}/>
                <FaLinkedinIn className='blue hover:cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110'  size={20}/>
                <AiFillTwitterCircle className='text-blue-400 hover:cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110' size={22} />
            </div>
            <div className='px-4 md:px-8'>Hello, i'm crypto apps the geek! What do you. the geek! What do you</div>
          </div>
      </div>
    </div>
  )
}

export default UserInfo
