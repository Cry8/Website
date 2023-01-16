import React from 'react'
import TeamCard from './TeamCard'

function Teams() {
  return (
    <div className="flex-wrap  w-full justify-center space-y-6 mb-24 md:mb-12">
      <div className="relative flex justify-center  ">
        <div style={{zIndex:20}} className="rounded text-white DmMedium blue-bg px-3 py-1 text-xl">
          TEAM
        </div>
        <div className='absolute w-full border border-gray-10/25 left-0 top-4 z-10' />
      </div>
      <div className="flex justify-center text-2xl md:text-3xl ubuntuMedium">
        Meet Our Creative Team
      </div>

      <div className="flex-wrap justify-center items-center w-full">
        <div className="mt-12 xl:mt-0 flex-wrap  md:flex justify-center items-center w-full space-y-12 xl:space-y-0">
          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center">
            <TeamCard
              fullname="Fullname Here "
              role="Web Developer and Data analyst Web Developer and Data analyst"
            />
          </div>

          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center">
            <TeamCard
              fullname="Fullname Here "
              role="Web Developer and Data analyst Web Developer and Data analyst"
            />
          </div>

          <div className="flex w-full md:w-1/2 xl:w-1/3 justify-center">
            <TeamCard
              fullname="Fullname Here "
              role="Web Developer and Data analyst Web Developer and Data analyst"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams
