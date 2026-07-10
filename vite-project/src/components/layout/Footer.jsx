import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import { SocialData } from '../../api/SocialData'
const Footer = () => {
  return (
    <section className='bg-primary-black pt-23.25 pb-21.5'>
      <Container>
        <h3 className='font-jost font-medium text-[26px] text-primary-white text-center mb-3.75'>GET 10% OFF</h3>
        <h4 className='font-jost font-normal text-sm text-seventh-color leading-6 text-center mb-6'>Be the first to get the latest news about trends, promotions, and much more!</h4>
        <div className='flex justify-center gap-7.5 mb-25'>
            <input type="search" placeholder='Your email address' className='font-jost font-normal text-sm text-seventh-color leading-6 w-137.5 h-15 pl-5 border-2'/>
            <button className="w-37.5 h-15 px-8 font-jost font-medium text-sm leading-6 bg-primary-black text-primary-white border-2 cursor-pointer">JOIN</button>
        </div>
        <div>
          <Image src='/public/images/footer-logo.png' alt='footer-logo.png'/>
          <h4 className='font-jost font-normal text-sm text-seventh-color leading-6 mt-11.25'>1418 River Drive, Suite 35 Cottonhall, CA 9622 <span className='block'>United States</span></h4>
          <h5 className='font-jost font-normal text-sm text-seventh-color leading-6 mt-8.5'>sale@uomo.com</h5>
          <h6 className='font-jost font-normal text-sm text-seventh-color leading-6'>+1 246-345-0695</h6>
          <div className='flex gap-9 mt-12'>
            {
              SocialData?.map((item) => (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                  <item.icon className='text-primary-white text-base'/>
                </a>
              ))
            }
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer