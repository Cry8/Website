import React from 'react'
import * as image from '../../reusable/Images'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'

function Card({status}) {
  return (
    <div class="relative max-w-md   overflow-hidden shadow-lg bg-white mb-4">
       <div
        className="absolute py-1 text-xs left-0 lg:text-sm top-10 lg:top-14 text-white w-32 lg:w-48 bg-blue-500 text-center DmMedium "
      >
        CURRENCY MARKET
      </div>
      <img class="w-full" src={image.TestRight} alt="Cry8" />
      <div class="px-1 py-2">
        <div className="cursor-pointer text-sm lg:text-base ubuntuBold  hover:text-blue-600 opacity-75">
          Anchorage chose south dakota for its crypto study - Here's whyd
        </div>
        
      </div>
      <div className={status ? 'w-full px-2 pb-2 text-sm': 'hidden'}>
        qqLorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima debitis possimus asperiores ad.
      </div>
      <div className="px-1 pb-4 flex justify-begin items-center space-x-2 text-xs">
        <div className="font-bold text-xs lg:text-sm text-blue-500 ">
          Anchorage
        </div>
        <div className="font-bold opacity-75">
          <BiTimeFive />
        </div>
        <div className="font-bold opacity-75">23 July, 2022</div>
        <div className="font-bold opacity-75">
          <AiOutlineMessage />
        </div>
        <div className="font-bold opacity-75">41</div>
      </div>
    </div>
  )
}

export default Card