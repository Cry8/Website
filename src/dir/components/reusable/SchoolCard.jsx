import React from 'react'
import * as images from './Images'

function SchoolCard() {
  return (
    <div
      className="max-w-md w-72 h-auto rounded-md shadow-xl"
      style={{ backgroundColor: '#11214A' }}
    >
      <div className="bg-white mt-3 flex-wrap justify-center items-center h-full">
        <div className="DmMedium text-xl md:text-2xl capitalize text-center py-2 ">
          school of cry8
        </div>

        <div className="border border-blue-700 w-full mb-4" />
        <div className="text-center pb-8 font-bold">
          Are you new to crypto currency?
          <p>Join our school today</p>
        </div>

        <div className="px-3 h-32 flex justify-center items-center">
          <img src={images.school} className="w-48" alt="Cry8 School" />
        </div>
        <div className='pt-12 pb-5 flex justify-center'>
          <div
            style={{ backgroundColor: '#284EB0' }}
            className="text-white ubuntuMedium text-center px-4 py-2 cursor-pointer rounded-md font-medium   transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
          >
            Start learning!
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard

// ubuntuMedium
