import React, { Fragment } from 'react'
import { Carousel } from 'react-responsive-carousel'
import * as images from '../../reusable/Images'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function Carouse() {
  return (
    <Fragment>
      <div className=" relative flex justify-center mt-6">
        <div
          style={{ zIndex: 20 }}
          className="rounded text-white DmMedium blue-bg px-3 py-1 text-xl"
        >
          WHAT DOES CRY8 OFFER?
        </div>
        <div className="absolute w-full border border-gray-10/25 left-0 top-4 z-10" />
      </div>

      <div
        style={{ height: '80vh' }}
        className="overflow-hidden w-full flex-wrap justify-center items-center  "
      >
        <div className="w-full md:flex h-full pt-12">
          <div className="w-full md:w-1/3 flex items-center justify-center">
            <div className="hidden md:inline-block text-5xl ubuntuBold">
              Trading
            </div>
          </div>
          <div className="w-full md:w-2/3  h-full">
            <Carousel
              infiniteLoop={true}
              height="100%"
              autoPlay={true}
              showThumbs={false}
            >
              <div className="h-full relative">
                <img src={images.Insight} className="  " />
                <p className="absolute bottom-0 right-12 text-2xl ubuntuMedium ">
                  Legend 1
                </p>
              </div>
              <div className="h-full relative">
                <img src={images.News} className="  " />
                <p className="absolute bottom-0 right-12 text-2xl ubuntuMedium ">
                  Legend 2
                </p>
              </div>
              <div className="h-full relative">
                <img src={images.Research} className="  " />
                <p className="absolute bottom-0 right-12 text-2xl ubuntuMedium ">
                  Legend 3
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Carouse
