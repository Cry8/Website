import React from 'react'
import * as image from './Images'

function Crypto({coin}) {
  return (
    <div className="w-full mb-8 md:mb-16">
      <div className="relative flex justify-center pb-8">
        <div
          style={{ zIndex: 20 }}
          className="text-xl  rounded text-white ubuntuMedium blue-bg px-3 py-1 uppercase"
        >
          {coin}
        </div>
        <div className="absolute w-full border border-gray-10/25 left-0 top-4 z-10" />
      </div>

      <div className=" w-full bg-white flex justify-center  px-3 md:px-8">
        <div className="hidden md:block relative w-full lg:w-1/3 xl:w-1/5 ">
          
            <div className="absolute py-1 text-xs left-0 lg:text-sm top-10 lg:top-14 text-white w-48 lg:w-48 bg-blue-500 text-center DmMedium ">
              CURRENCY MARKET
            </div>
            <img
              class="w-full cursor-pointer "
              src={image.TestRight}
              alt="Cry8 "
            />
        </div>

        <div className="  w-full lg:w-2/3 xl:w-4/5 text-center md:text-left md:pl-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          reiciendis sed recusandae inventore est ex beatae modi. Officia, quod
          enim molestias ducimus fugit eius vero odit sapiente eum quibusdam
          quam!.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio blanditiis quibusdam, nisi commodi cumque, facilis eum quas eligendi ullam placeat, repudiandae ratione voluptate quae nam ea qui perspiciatis reiciendis?
        </div>
      </div>
    </div>
  )
}

export default Crypto
