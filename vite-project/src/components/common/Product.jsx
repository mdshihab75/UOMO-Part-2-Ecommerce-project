import React from 'react'
import Image from './Image'
import ProductImage from '../../assets/images/Productimages.png'
const Product = ({item}) => {
    
    return (
        <div className='max-w-82.5 relative '>
            <div className='group'>
                <Image className='w-full' src={item.thumbnail} alt="Productimages" />
            <div className='bg-primary-black pt-4 pb-2.5 absolute w-82.5 bottom-5 group-hover:visible group-hover:bottom-20 duration-100 invisible'>
                <button className='font-jost font-medium text-sm leading-6 text-primary-white ml-14'>ADD TO CART<span className='ml-14'>QUICK VIEW</span></button>
            </div>
            </div>
            <div>
                <h3 className='font-jost font-normal text-sm text-third-color mt-3'>{item.category}</h3>
                <h2 className='font-jost font-normal text-base text-primary-black mt-0.5'>{item.title}</h2>
                <h3 className='font-jost font-normal text-base text-fourth-color'>{item.price}</h3>
            </div>
            <button className=' absolute w-82.5 top-5 left-27 translate-x-[50%] cursor-pointer'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="white" />
                    <g clip-path="url(#clip0_49_444)">
                        <path d="M26.7145 15.6465C24.9744 13.9068 22.1436 13.9068 20.4039 15.6465L19.9999 16.0503L19.596 15.6465C17.8564 13.9066 15.0253 13.9066 13.2856 15.6465C11.5813 17.3508 11.5702 20.0524 13.26 21.9307C14.8011 23.6433 19.3464 27.3432 19.5393 27.4998C19.6702 27.6063 19.8277 27.6581 19.9843 27.6581C19.9895 27.6581 19.9947 27.6581 19.9996 27.6578C20.1616 27.6654 20.3248 27.6098 20.46 27.4998C20.6528 27.3432 25.1986 23.6433 26.7402 21.9305C28.4297 20.0524 28.4186 17.3508 26.7145 15.6465ZM25.69 20.9855C24.4884 22.3204 21.1855 25.0735 19.9996 26.0505C18.8138 25.0738 15.5116 22.3209 14.3102 20.9858C13.1314 19.6756 13.1203 17.8097 14.2845 16.6456C14.8791 16.0512 15.6599 15.7538 16.4407 15.7538C17.2215 15.7538 18.0024 16.051 18.5969 16.6456L19.4851 17.5338C19.5908 17.6395 19.7241 17.7026 19.864 17.7247C20.091 17.7735 20.3373 17.7101 20.5139 17.534L21.4026 16.6456C22.5919 15.4567 24.5266 15.4569 25.7152 16.6456C26.8794 17.8097 26.8683 19.6756 25.69 20.9855Z" fill="#222222" />
                    </g>
                    <defs>
                        <clipPath id="clip0_49_444">
                            <rect width="16" height="16" fill="white" transform="translate(12 13)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    )
}

export default Product