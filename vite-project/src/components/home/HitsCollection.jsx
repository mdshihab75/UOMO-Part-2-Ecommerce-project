import React from 'react'
import Container from "../ui/Container";
import Image from '../common/Image'
import hits1 from '../../assets/images/hits1.png'
import hits2 from '../../assets/images/hits2.png'
import hits3 from '../../assets/images/hits3.png'
const HitsCollection = () => {
  return (
    <section className='mt-15'>
        <Container>
            <div className='flex gap-7.5'>
                <div className='relative text-center group'>
                    <Image src={hits1} alt="hits1" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
                        <h3 className='font-jost font-bold text-[26px] text-primary-black group-hover:text-primary-white'> <span>NEW</span> <span className='font-jost font-bold text-[26px] text-primary-black group-hover:text-primary-white block'>HORIZONS</span></h3>
                        <button className='font-jost font-medium text-sm leading-6 text-primary-black group-hover:text-primary-white relative after:content-[""] after:absolute after:w-0 hover:after:w-[70%] after:h-0.5 hover:after:bg-primary-white after:left-0 after:bottom-0 after:duration-300 '>SHOP NOW</button>
                    </div>
                </div>
                <div className='relative text-center group'>
                    <Image src={hits2} alt='hits2'/>
                    <div className='absolute top-1/2 right-1/2 translate-x-1/2'>
                        <h3 className='font-jost font-bold text-[26px] text-primary-black group-hover:text-primary-white'> <span>SUMMER</span> <span className='font-jost font-bold text-[26px] text-primary-black group-hover:text-primary-white block'>HATS</span> </h3>
                        <button className='font-jost font-medium text-sm leading-6 text-primary-black group-hover:text-primary-white relative after:content-[""] after:absolute after:w-0 hover:after:w-[70%] after:h-0.5 after:left-0 after:bottom-0 hover:after:bg-primary-white after:duration-300'>SHOP NOW</button>
                    </div>
                </div>
                <div className='relative text-center group'>
                    <Image src={hits3} alt='hits3'/>
                    <div className='absolute top-2/5 right-1/2 translate-x-1/2'>
                        <h5 className='font-jost font-normal text-sm leading-6 text-primary-black group-hover:text-primary-white mb-2'>Free delivery for Uomo members</h5>
                        <h3 className='font-jost font-bold text-[26px] text-primary-black group-hover:text-primary-white'>PROMOTIONS UP TO 10% OFF</h3>
                        <button className='font-jost font-medium text-sm leading-6 text-primary-black group-hover:text-primary-white relative after:content-[""] after:absolute after:w-0 hover:after:w-[70%] after:h-0.5 after:left-0 after:bottom-0 hover:after:bg-primary-white after:duration-300'>SEE MORE</button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default HitsCollection