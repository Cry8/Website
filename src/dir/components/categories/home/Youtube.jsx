import React from 'react'
import { BsYoutube } from 'react-icons/bs'

function Youtube() {
  return (
    <div className="bg-inherit px-3 md:px-0">
      <div className=" rounded-lg w-full  flex-wrap md:flex justify-center items-center shadow-xl">
        <div className=" h-auto  bg-white px-8 py-4   w-full flex flex-wrap justify-center items-center">
          <div className="flex w-full ubuntuBold  text-2xl items-center justify-center md:justify-start space-x-4 text-center md:text-left">
            <span>
              <BsYoutube color="red" />
            </span>
            <span>YOUTUBE </span>
          </div>

          <div className="border border-blue-500 my-3 w-full " />

          <div className="w-full flex-wrap justify-between items-center">
            <div className="w-full md:flex justify-between ">
              <div className="md:hidden w-full md:1/2  flex flex-row items-center justify-center">
                <div>
                  <iframe
                    className="rounded w-80 md:w-96 h-80 "
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"
                  ></iframe>
                </div>
              </div>

              <div className="mt-12 md:mt-0 w-full flex flex-wrap justify-center text-center md:text-left md:justify-between  md:1/2 space-y-5">
                <div className="ubuntuBold text-xl">
                  Introducing our Latest videos on our you tube page about
                  cryptocurrency.
                </div>
                <div className="DmRegular loosing-tight tracking-wide">
                  For most of us, our knowledge and beliefs tend to form a kind
                  of comfort zone where we prefer to stay in instead of
                  exploring the so-called “discomfort of Grant explains that the
                  act of questioning our knowledge and opinions can be unnerving
                  since it makes the world seem more unpredictable be unnerving
                  since, it makes the world seem more unpredictable. it makes
                  the world seem more..
                </div>
                <div className=" ">
                  <div className=" red DmMedium text-center px-4 py-2 rounded-md font-medium text-white cursor-pointer flex justify-center items-center text-base hover:bg-red-500 space-x-3 ">
                    <span>
                      <BsYoutube color="white" />
                    </span>
                    <span>Subscribe </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:inline w-full md:1/2  flex items-center justify-center">
                <div className=" flex items-center justify-center">
                  <iframe
                    className="rounded-md w-80 md:w-96 h-80 "
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube
