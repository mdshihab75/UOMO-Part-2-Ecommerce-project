import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import { LatestNewsData } from '../../api/LatestNewsData'
import LatestNewsCategory from '../common/LatestNewsCategory'
import { LogoData } from '../../api/LogoData'

const LatestNews = () => {
    
  return (
    <section className='bg-primary-white mt-14'>
        <Container>
            <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-8'>LATEST NEWS</h3>
            <ul className='grid grid-cols-3 gap-7.5 mb-13'>
                {
                    LatestNewsData?.map((item) => (
                        <LatestNewsCategory key={item.id} item={item}/>
                    ))
                }
            </ul>
            <div className='grid grid-cols-7 gap-27 mb-25.75'>
                {
                    LogoData?.map((item) => (
                        <Image key={item.id} src={item.image}/>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default LatestNews