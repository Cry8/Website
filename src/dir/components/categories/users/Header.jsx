import React from 'react'

function Header() {
  return (
    <div className="h-auto w-full px-4 md:px-6 flex-wrap flex justify-center items-center md:justify-start ">
      <div className="mt-6 space-y-3 flex-wrap md:flex   md:space-x-4 justify-center items-center ">
        <div className="flex justify-center">
          <div className="blue-bg text-white rounded-full  h-16 w-16 md:w-28 md:h-28 flex  items-center justify-center text-3xl md:text-6xl ubuntuBold">
            H
          </div>
        </div>

        <div className="flex-wrap justify-center text-center md:text-left space-y-1 ">
          <h5 className="ubuntuBold text-xl md:text-2xl">fullname</h5>
          <h5>email@email.combbbb</h5>

          <div className="flex justify-center md:justify-start">

          <div className="border border-blue-400 px-3 py-1 w-32 text-xs">
            Change Password
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
