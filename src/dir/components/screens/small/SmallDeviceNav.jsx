import React from 'react'

function SmallDeviceNav() {
  return (
    <div style={{zIndex:99}} className="absolute top-14 left-0 w-full flex-wrap px-4 bg-white 100vh">
      <div className="w-full border-b shadow-b flex justify-between items-center py-2 ">
        <div className="flex items-center space-x-2 py-3">
          <div className="text-2xl text-white rounded-full blue-bg py-2 px-4 ubuntuBold">
            H
          </div>

          <div className="blue text-xl ubuntuMedium">Harry EastEnder</div>
        </div>

        <div className="flex blue DmMedium uppercase">Logout</div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl"> News</div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl"> Trading</div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl"> research</div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>

        <div className="flex w-full ubuntuRegular pb-3">
          <div className="w-1/2 capitalize">De-Fi</div>
          <div className="w-1/2 capitalize">Blockchain</div>
        </div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl"> words bucket</div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl">
          {' '}
          school of cry8
        </div>
      </div>

      <div className="flex-wrap w-full py-2 border-b shadow-b">
        <div className="uppercase ubuntuMedium py-3 text-xl"> about cry8</div>
      </div>
    </div>
  )
}

export default SmallDeviceNav
