import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import { LatestNewsData } from '../../api/LatestNewsData'
import LatestNewsCategory from '../common/LatestNewsCategory'
import { LogoData } from '../../api/LogoData'
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";

const LatestNews = () => {
    const Slider = SliderLib.default || SliderLib;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendDots: (dots) => (
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
    <ul className="flex gap-3">
      {dots}
    </ul>
  </div>
),

        customPaging: i => (
            <div className='w-1.5 h-1.5 rounded-full bg-fourth-color cursor-pointer mb-13'></div>
        )
        
    };
    

    return (
        <section id='news' className='bg-primary-white mt-14'>
            <Container>
                <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-8'>LATEST NEWS</h3>
                <Slider {...settings}>
                    {LatestNewsData.map((item) => (
                        <div key={item.id} className="px-3 py-24">
                            <LatestNewsCategory item={item} />
                        </div>
                    ))}
                </Slider>
                <div className='grid grid-cols-7 gap-27 mb-25.75'>
                    {
                        LogoData?.map((item) => (
                            <Image key={item.id} src={item.image} />
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default LatestNews