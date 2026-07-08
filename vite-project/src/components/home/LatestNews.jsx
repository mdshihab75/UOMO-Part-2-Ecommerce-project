import React from 'react'
import Container from '../ui/Container'
import Image from '../common/Image'
import { LatestNewsData } from '../../api/LatestNewsData'
import Latestnews from '../common/Latestnews'

const LatestNews = () => {
  return (
    <section className='mt-14'>
        <Container>
            <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-8'>LATEST NEWS</h3>
            <ul className='grid grid-cols-3 gap-7.5 mb-13'>
                {
                    LatestNewsData?.map((item) => (
                        <Latestnews key={item.id} item={item}/>
                    ))
                }
            </ul>
            <div>
                <Image src={}/>
            </div>
        </Container>
    </section>
  )
}

export default LatestNews