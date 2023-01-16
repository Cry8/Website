import React from 'react'
import * as image from '../../reusable/Images'
import Card from './Card'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMessage } from 'react-icons/ai'

function Landing() {
  return (
    <div className=" h-auto  bg-white px-8 py-4   w-full flex-wrap">
      <div className="flex w-full ubuntuBold text-xl md:text-3xl">
        TOP STORIES
      </div>
      <div className="border border-blue-500 my-1.5 w-full " />

      <div className="flex  items-start justify-center w-full h-full pt-4">
        <div className="w-2/3  bg-white  flex-wrap items-start justify-begin ">
          <div className="h-3/5 ">
            <img
              src={image.landingImg}
              alt="cry8 Image"
              style={{ height: '100%' }}
              //   className="w-full h-96"
            />
          </div>
          <div className="space-y-5  xl:mr-32  ">
            <div className="cursor-pointer pt-8  text-xl lg:text-2xl  ubuntuBold hover:text-blue-600 ">
            Anchorage chose south dakota for its crypto study - Here's why  
            </div>
            <div className="flex justify-begin items-center space-x-2 text-sm md:text-base">
              <div className="font-bold text-base lg:text-xl text-blue-600 ">
                Anchorage chose
              </div>
              <div className="font-bold opacity-50">
                <BiTimeFive />
              </div>
              <div className="font-bold opacity-50">23 July, 2022</div>
              <div className="font-bold opacity-50">
                <AiOutlineMessage />
              </div>
              <div className="font-bold opacity-50">41</div>
            </div>
            <div  class="text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus nihil.
            </div>
          </div>
        </div>

        <div className="flex-wrap justify-center items-center w-1/3 lg:w-2/5 ">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
