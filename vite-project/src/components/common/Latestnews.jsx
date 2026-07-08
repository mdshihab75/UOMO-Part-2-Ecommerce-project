import React from 'react'
import Image from './Image'

const Latestnews = ({item}) => {
  return (
    <div className='max -w-[320px]'>
        <div>
            <Image src={item.images} alt="Productimages"/>
        </div>
        <div>
            <div className='flex gap-7.5 items-center mt-3.5 mb-1'>
                <h3 className='font-jost font-normal text-sm leading-6 text-fourth-color uppercase'>{item.name}</h3>
                <p className='font-jost font-normal text-sm leading-6 text-fourth-color'>{item.date}</p>
            </div>
            <h4 className='font-jost '>{item.title}</h4>
        </div>
        
    </div>
  )
}

export default Latestnews