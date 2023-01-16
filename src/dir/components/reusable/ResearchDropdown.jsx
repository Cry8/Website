import React, { useState } from 'react'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import * as images from './Images'

function ResearchDropdown() {
  const [research, setResearch] = useState(true)

  const offCat = () => {
    setResearch(false)
  }

  const setCat = () => {
    setResearch(true)
  }

  return (
    <div className="w-full flex-wrap bg-white h-72">
      <div className="w-full pt-6 flex justify-around items-center border-b py-2 shadow-md ">
        <div
          onClick={setCat}
          className={
            research
              ? 'uppercase DmMedium blue-bg p-2 text-white rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 blue font-bold rounded cursor-pointer'
          }
        >
          research
        </div>
        <div
          onClick={offCat}
          className={
            research
              ? 'uppercase DmMediump-2 blue font-bold rounded cursor-pointer'
              : 'uppercase DmMedium  p-2 text-white rounded  blue-bg  cursor-pointer'
          }
        >
          writers
        </div>
      </div>

      {research && (
        <div className="pt-5 w-full flex flex-wrap justify-around items-center space-y-6">
          <div className="w-full flex">
            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              asset management
            </div>
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">
              privacy network
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">
              defi
            </div>
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">
              zk rollups
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">
              data manaement
            </div>
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">
              game-fi
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-begin uppercase ">
              nft<span className="lowercase">s</span>
            </div>
            {/* <div className="w-1/2 flex  DmMedium hover:text-blue-500 cursor-pointer justify-center uppercase ">game-fi<span className='lowercase'>s</span></div> */}
          </div>
        </div>
      )}

      {!research && (
        <div className="pt-5 w-full flex flex-wrap justify-around items-center space-y-6">
          <div className="w-full flex">
            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>
          </div> 

          <div className="w-full flex">
            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>
          </div> 

          <div className="w-full flex">
            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex DmMedium cursor-pointer hover:text-blue-500 justify-center uppercase  ">
              <div>
                <img src={images.user} className="w-10 h-10 rounded-full" />
              </div>
              <div className=" pl-2 flex-wrap">
                <div className="text-sm ubuntuMedium capitalize">Fullname</div>
                <div className="flex text-xs space-x-2">
                  <span className="flex justify-center items-center cursor-pointer ">
                    <AiFillInstagram size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <BsTwitch size={16} className="text-blue-500" />
                  </span>
                  <span className="flex justify-center items-center cursor-pointer">
                    <AiFillTwitterSquare size={16} className="text-blue-500" />
                  </span>
                </div>
              </div>
            </div>
          </div> 
        </div>
      )}
    </div>
  )
}

export default ResearchDropdown
