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
        {/*Input Field*/}
        <div className='flex justify-center gap-7.5 mb-25'>
          <input type="search" placeholder='Your email address' className='font-jost font-normal text-sm text-seventh-color leading-6 w-137.5 h-15 pl-5 border-2' />
          <button className="w-37.5 h-15 px-8 font-jost font-medium text-sm leading-6 bg-primary-black text-primary-white border-2 cursor-pointer">JOIN</button>
        </div>
        <div className='flex justify-between gap-45'>
          <div>
            <Image src='/public/images/footer-logo.png' alt='footer-logo.png' />
            <h4 className='font-jost font-normal text-sm text-seventh-color leading-6 mt-11.25'>1418 River Drive, Suite 35 Cottonhall, CA 9622 <span className='block'>United States</span></h4>
            <h5 className='font-jost font-normal text-sm text-seventh-color leading-6 mt-8.5'>sale@uomo.com</h5>
            <h6 className='font-jost font-normal text-sm text-seventh-color leading-6'>+1 246-345-0695</h6>
            {/*Social Icons*/}
            <div className='flex gap-9 mt-12'>
              {
                SocialData?.map((item) => (
                  <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
                    <item.icon className='text-primary-white text-base' />
                  </a>
                ))
              }
            </div>
          </div>
          {/*Services Part Here*/}
          <div className='flex flex-col'>
            <h3 className='font-jost font-medium text-[18px] text-primary-white mb-6.25'>COMPANY</h3>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>About Us</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Careers</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Affiliates</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Blog</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Contact Us</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-jost font-medium text-[18px] text-primary-white mb-6.25'>SHOP</h3>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>New Arrivals</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Accessories</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Men</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Women</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Shop All</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-jost font-medium text-[18px] text-primary-white mb-6.25'>HELP</h3>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Customer Service</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>My Account</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Find a Store</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Legal & Privacy</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Contact</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Gift Card</a>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-jost font-medium text-[18px] text-primary-white mb-6.25'>OPENING TIME</h3>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Mon – Fri: 8AM – 9PM</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Sat: 9 AM – 8 PM</a>
            <a className='font-jost font-normal text-sm text-seventh-color leading-10 mb-1'>Sun: Closed</a>
          </div>
        </div>
        {/* light line divider */}
        <div className='pt-22 pb-8.5'>
          <div className='max-w-full bg-primary-white p-px'></div>
        </div>
        {/* End Text  */}
        <div className='flex flex-wrap justify-between pb-7'>
          <div className='flex gap-2 items-center'>
            <h3 className='font-jost font-normal text-sm leading-6 text-primary-black flex items-center'>
              ©2026 Uomo
            </h3>
          </div>
          <div className='flex items-center flex-wrap'>
            <h4 className='font-jost font-normal text-sm leading-6 text-primary-white pr-4 '>United Kingdom  |  English</h4>

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" fill="#E4E4E4" />
            </svg>

            <h4 className='font-jost font-normal text-sm leading-6 text-primary-white pr-2.5 pl-7'>$ USD</h4>

            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49932 3.36078C7.22726 3.08872 6.77274 3.08872 6.49999 3.36078L0.206656 9.638C-0.0688853 9.91355 -0.0688853 10.3604 0.206656 10.6352C0.482197 10.9108 0.929749 10.9108 1.20529 10.6352L6.99997 4.85667L12.794 10.6359C13.0702 10.9115 13.517 10.9115 13.7933 10.6359C14.0688 10.3604 14.0688 9.91355 13.7933 9.6387L7.49932 3.36078Z" fill="#E4E4E4" />
            </svg>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer