import React from 'react'
import ShopBannerImage from '../../assets/images/shopbanner.png'
import Image from '../common/Image'
const ShopBanner = () => {
  return (
    <section>
        <Image className='w-full mb-9' src={ShopBannerImage} alt='ShopBannerImage'/>
    </section>
  )
}

export default ShopBanner