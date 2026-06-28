import React from 'react'
import { BannerData } from '../../Api/BannerData'
import Image from '../common/Image'
import SliderLib from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  const Slider = SliderLib.default || SliderLib;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className='flex absolute gap-5 top-[50%] left-10 rotate-90' >{''} {dots} {''}</ul>
      </div>
    ),

    customPaging: i => (
      <div className='w-1.5 h-1.5 rounded-full bg-fourth-color cursor-pointer'></div>
    )
  }
  return (
    <section id='banner relative'>

      <Slider {...settings}>
        {
          BannerData?.map((item) => (
            <div key={item.id} className="relative">
              <Image key={item.id} src={item.banner} alt="banner.png"
                className="w-full" />
              <div className="absolute top-1/2 left-45  -translate-y-1/2 z-50 p-13">
                <h2 className="font-jost font-medium text-sm leading-6 ml-12">
                 <span className='after:content-[] after:w-10 after:h-0.5 after:absolute after:-left-10 after:top-2 after:bg-primary-black relative mr-3'></span>SUMMER 2020
                </h2>

                <h1 className="font-jost font-bold text-[70px] leading-20 text-primary-black mt-2.75">
                  HELLO NEW SEASON
                </h1>

                <p className="font-jost font-normal text-base text-primary-black mt-1">
                  LIMITED TIME OFFER - UP TO 60% OFF & FREE SHIPPING
                </p>

                <button className="mt-13 pl-18.75 pr-11.5 py-4.5 font-jost font-medium text-sm leading-6 text-primary-black bg-primary-white ">
                 <span className='after:content-[] after:w-5 after:h-0.5 after:absolute after:-left-7 after:top-2 after:bg-primary-black relative'></span> DISCOVER NOW
                </button>
              </div>
            </div>
          ))}

      </Slider>

    </section>
  )
}

export default Banner