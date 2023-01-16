import React, { useState } from 'react'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import * as images from './Images'

function TradingDropdown() {
  const [trading, setTrading] = useState(true)

  const offCat = () => {
    setTrading(false)
  }

  const setCat = () => {
    setTrading(true)
  }

  return (
    <div className="w-full flex-wrap bg-white h-80">
      <div className="w-full flex  justify-around items-center border-b shadow-md py-2">
      <div
          onClick={setCat}
          className={
            trading
              ? 'uppercase DmMedium blue-bg p-2 text-white rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 blue font-bold rounded cursor-pointer'
          }
        >
          trading ideas
        </div>
        <div
        //   onClick={setCat}
          className={
            trading
              ? 'uppercase DmMedium blue-bg p-2 text-white rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 blue font-bold rounded cursor-pointer'
          }
        >
          technical analysis
        </div>
        <div
          onClick={offCat}
          className={
            trading
              ? 'uppercase DmMediump-2 blue font-bold rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 text-white rounded  blue-bg  cursor-pointer'
          }
        >
          trading system
        </div>
      </div>

        <div className="pt-5 w-full flex flex-wrap justify-around items-center space-y-6 ">
          <div className="w-full flex  ">
            <div className="w-1/3 flex-wrap DmMedium   justify-center ">
              <div className='flex justify-center items-center'>
                <img src={images.user} className="w-56 cursor-pointer" />
              </div>
              <div className='w-full pt-5 flex justify-center items-center bg'>
                <div className='cursor-pointer w-72 opacity-75 text-xs px-6'>
                OK Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim asperiores voluptates quidem maxime consectetur  
                </div>
              </div>
            </div>
            
            <div className="w-1/3 flex-wrap DmMedium  justify-center ">
              <div className='flex justify-center items-center'>
                <img src={images.user} className="w-56 cursor-pointer" />
              </div>
              <div className='w-full pt-5 flex justify-center items-center     bg'>
                <div className=' cursor-pointer w-72 opacity-75 text-xs px-6 '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim asperiores voluptates quidem maxime consectetur  
                </div>
              </div>
            </div>

            <div className="w-1/3 flex-wrap DmMedium  justify-center ">
              <div className='flex justify-center items-center'>
                <img src={images.user} className="w-56 cursor-pointer" />
              </div>
              <div className='w-full pt-5 flex justify-center items-center     bg'>
                <div className='cursor-pointer w-72 opacity-75 text-xs px-6'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim asperiores voluptates quidem maxime consectetur  
                </div>
              </div>
            </div>
          </div>
           
 
           
        </div>

      
    </div>
  )
}

export default TradingDropdown
