import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import * as images from '../components/reusable/Images'
import Navbar from '../components/reusable/Navbar'
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5'

export default function Error() {
  return (
    <Fragment>
      <Navbar />
      <div className='h-screen   flex items-center justify-center bg-white '>
      <div className='flex-wrap  '>
        <div className="text-center">
          <div className='uppercase ubuntuBold text-3xl'>
            oops!
          </div>
          <div className='DmMedium opacity-75 pt-2 text-xl'>
            Page not found
          </div>
        </div>
        <div className='px-6 flex justify-center'>
          <img src={images.error} alt="error image" />
        </div>

<div className='w-full flex justify-center items-center mt-12'>

        <button className='flex items-center space-x-3 blue-bg rounded-lg uppercase text-xl DmMedium px-3 py-1  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 cursor-pointer text-white'>
       <IoChevronBackCircle /> <span></span>  go back
        </button>
        </div>
        </div>
        </div>
    </Fragment>
  )
}
