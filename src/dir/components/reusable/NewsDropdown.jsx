import React, { useState } from 'react'

function NewsDropdown() {
  const [category, setCategory] = useState(true)

  const offCat = () => {
    setCategory(false)
  }

  const setCat = () => {
    setCategory(true)
  }

  return (
    <div className="w-full flex-wrap bg-white h-72">
      <div className="w-full pt-6 flex justify-around items-center border-b py-2 shadow-md ">
        <div
          onClick={setCat}
          className={
            category
              ? 'uppercase DmMedium blue-bg p-2 text-white rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 blue font-bold rounded cursor-pointer'
          }
        >
          category
        </div>
        <div
          onClick={offCat}
          className={
            category
              ? 'uppercase DmMediump-2 blue font-bold rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 text-white rounded  blue-bg  cursor-pointer'
          }
        >
          news tag
        </div>
      </div>


      {category && <div className="pt-5 w-full flex flex-wrap justify-around items-center space-y-6">
        <div className="w-full flex">
          <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">top stories</div>
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">most read</div>
        </div>

        <div className="w-full flex justify-left">
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">latest post</div>
        </div>
      </div>}

      {!category && <div className="pt-5 w-full flex flex-wrap justify-around items-center space-y-6">
        <div className="w-full flex">
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer  justify-center uppercase ">defi</div>
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">fintech</div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">bitcoin</div>
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">ethereum</div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">altcoins</div>
          <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">nft<span className='lowercase'>s</span></div>
        </div>
      </div>}

    </div>
  )
}

export default NewsDropdown
