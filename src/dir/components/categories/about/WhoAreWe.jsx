import React from 'react'
import Acard from './Acard'

function WhoAreWe() {
  return (
    <div className="flex-wrap  w-full justify-center my-24 md:my-24">
      <div className="relative flex justify-center pb-8">
        <div  style={{zIndex:20}} className="text-xl  rounded text-white DmMedium blue-bg px-3 py-1">
          WHO ARE WE?
        </div>
        <div className='absolute w-full border border-gray-10/25 left-0 top-4 z-10' />
      </div>
      <div className="flex-wrap justify-center items-center w-full">
        <div className="flex-wrap  md:flex justify-center items-center w-full space-y-12 xl:space-y-0">
          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center py-12 xl:py-0 ">
            <Acard
              title="Our Mission"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          iste nesciunt quam delectus veniam pariatur blanditiis quod
          accusantium! Temporibus rerum saepe deserunt quo ab aperiam fugit
          assumenda, accusamus eius repellat."
            />
          </div>

          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center">
            <Acard
              title="Our Vision"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          iste nesciunt quam delectus veniam pariatur blanditiis quod
          accusantium! Temporibus rerum saepe deserunt quo ab aperiam fugit
          assumenda, accusamus eius repellat."
            />
          </div>

          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center">
            <Acard
              title="Our Resources"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          iste nesciunt quam delectus veniam pariatur blanditiis quod
          accusantium! Temporibus rerum saepe deserunt quo ab aperiam fugit
          assumenda, accusamus eius repellat."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe
