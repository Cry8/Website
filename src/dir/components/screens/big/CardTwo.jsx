import React from 'react'
import * as image from '../../reusable/Images'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'

function CardTwo() {
  return (
    <div class="relative  overflow-hidden shadow-lg bg-white mb-4 w-full flex-wrap lg:flex justify-center  ">
      <div className="relative w-full lg:w-1/2  ">
        <div className="absolute py-1 text-xs left-0 lg:text-sm top-10 lg:top-14 text-white w-48 lg:w-48 bg-blue-500 text-center DmMedium ">
          CURRENCY MARKET
        </div>
        <img class="w-full cursor-pointer " src={image.TestRight} alt="Cry8 " />
      </div>

      <div className="lg:pl-3 flex-wrap w-full lg:w-1/2 px-2 overflow-hidden pb-2">
        <div class=" py-2">
          <div className="cursor-pointer text-base lg:text-xl ubuntuBold  hover:text-blue-600 opacity-75">
            Anchorage chose south dakota for its crypto study - Here's whyd
          </div>
        </div>
        <div className=" pb-4 flex justify-begin items-center space-x-2 text-xs">
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
        <div class="text-sm lg:text-base cursor-pointer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptatibus nihil.
        </div>
      </div>
    </div>
  )
}

export default CardTwo
