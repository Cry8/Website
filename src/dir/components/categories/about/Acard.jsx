import React from 'react'
import * as images from '../../reusable/Images'

function Acard({title, text}) {
  return (
    <div className="w-auto  flex-wrap justify-center items-center   w-80 md:w-96 h-auto  rounded-md">
      <div className="flex justify-center items-center text-xl text-2xl ubuntuBold pb-3">
        {title}
      </div>
      <div className="relative  shadow-xl  focus:shadow-outline shadow-xl  shadow-black/50  rounded-md w-80 md:w-96  h-96 flex-wrap justify-center  items-center  bg-white">
        <div className="text-left px-4 py-3  ">
          <img src={images.openQuote} />
        </div>
        <div className="px-8 text-base DmMedium opacity-75 tracking-wide leading-loose pt-6">
            {text}
          
        </div>
        <div className="absolute right-0 bottom-0 text-right px-4 py-3">
          <img src={images.closeQuote} />
        </div>
      </div>
    </div>
  )
}

export default Acard
