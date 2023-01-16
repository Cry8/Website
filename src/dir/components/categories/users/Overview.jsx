import React, { useReducer } from 'react'

function Overview() {

  return (
    <div className="mt-6 mx-4 md:mx-6 md:mt-8 border p-2 pb-4  shadow-xl rounded h-auto flex-wrap">
      <div className="md:flex justify-between space-y-5 md:space-y-0">
        <div className="w-full flex-wrap">
          <h2 className="uppercase ubuntuBold">profile</h2>
          <div className="flex space-x-3">
            <h2 className="opacity-75 capitalize">First name</h2>
            <h2 className="font-bold">Fulname</h2>
          </div>

          <div className="flex space-x-3">
            <h2 className="opacity-75 capitalize">Last name</h2>
            <h2 className="font-bold">Fulname</h2>
          </div>

          <div className="flex space-x-3">
            <h2 className="opacity-75 capitalize">First name</h2>
            <h2 className="font-bold">Fulname@email.com</h2>
          </div>
        </div>

        <div className="w-full   flex-wrap">
          <h2 className="text-left md:text-center uppercase ubuntuBold">badges</h2>

          <div className='flex'>
os
          </div>
        </div>

        <div className="w-full flex justify-start md:justify-end space-x-3">
          <div className="flex-wrap">
            <div>
              <h2 className="uppercase ubuntuBold">read</h2>
            </div>
            <div className="font-bold text-center">12</div>
          </div>

          <div className="flex-wrap">
            <div>
              <h2 className="uppercase ubuntuBold">liked</h2>
            </div>
            <div className="font-bold text-center">12</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
