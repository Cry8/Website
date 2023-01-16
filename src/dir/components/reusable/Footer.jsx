import React from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillRedditSquare,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai'
import { BsTwitch } from 'react-icons/bs'
import { BiImages } from 'react-icons/bi'
import * as image from './Images'


function Footer() {
  return (
    <div className="text-white blue-bg px-4 w-full h-auto">
      <div className="flex-wrap w-full pt-8 md:pt-12">
        <div className="md:flex w-full mb-4">
          
        <div className="md:hidden w-full md:w-3/5 flex   justify-around mb-6">
            <div className=" flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">
                Services
              </div>
              <div className='flex-wrap space-y-6 opacity-75'>


              <div>News</div>
              <div>Trading</div>
              <div>Research</div>
              <div>School of Cry8</div>
            </div>
            </div>

            <div className=" flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">Company</div>
              <div className='flex-wrap space-y-6 opacity-75'>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Advertising</div>
              <div>Newsletter</div>
            </div>
            </div>

            <div className="hidden md:inline-block flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">Links</div>
              <div className='flex-wrap space-y-6 opacity-75'>
              <div>Sign Up</div>
              <div>Help Center</div>
            </div>
          </div>
          </div>
          
          <div className="w-full md:w-2/5  flex-wrap justify-center items-center space-y-4 ">
            <div className="flex  justify-center items-center w-full ">
              <img src={image.footerD} className="w-40 md:w-48 cursor-pointer " alt="cry8 footer logo"/>
            </div>
            <div className="flex justify-center items-center space-x-5 ">
              <span className='flex justify-center items-center cursor-pointer'>
                <AiFillYoutube size={22} color="" />
              </span>
              <span className='flex justify-center items-center cursor-pointer'>
                <AiFillFacebook size={22} />
              </span>
              <span className='flex justify-center items-center cursor-pointer'>
                <AiFillInstagram  size={22}/>
              </span>
             <span className='flex justify-center items-center cursor-pointer'>
                <BsTwitch  size={22}/>
              </span>
              <span className='flex justify-center items-center cursor-pointer'>
                <AiFillTwitterSquare size={22} color="light-blue" />
              </span>
            </div>
            <div className="flex justify-center DmRegular text-base font-medium text-center md:text-left ">
              Sign-up for our weekly newsletter
            </div>
            <div className="flex justify-center items-center ubuntuMedium">
              <form>
                <input type="text" placeholder="Email Address" className='w-auto md:w-32 lg:w-auto border px-3 py-2 ubuntuRegular  bg-inherit' />
                <button
                  type="submit"
                  title='Subscribe'
                  className="px-2 lg:px-3 py-2 border bg-white blue ubuntuBold rounded-r"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="hidden md:inline-block w-full md:w-3/5 flex   justify-around">
          <div className="  w-full  flex   justify-around">
            <div className=" flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">
                Services
              </div>
              <div className='flex-wrap space-y-6 opacity-75'>


              <div>News</div>
              <div>Trading</div>
              <div>Research</div>
              <div>School of Cry8</div>
            </div>
            </div>

            <div className=" flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">Company</div>
              <div className='flex-wrap space-y-6 opacity-75'>
              <div>About Us</div>
              <div>Contact Us</div>
              <div>Advertising</div>
              <div>Newsletter</div>
            </div>
            </div>

            <div className="hidden md:inline-block flex-wrap ">
              <div className="ubuntuMedium text-xl font-bold mb-3">Links</div>
              <div className='flex-wrap space-y-6 opacity-75'>
              <div>Sign Up</div>
              <div>Help Center</div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>

      <div className="border opacity-50 border-gray-100 w-full" />
      <div className="w-full text-center py-3 ubuntuMedium">Cry8, 2022 All rights reserved.</div>
    </div>
  )
}

export default Footer
