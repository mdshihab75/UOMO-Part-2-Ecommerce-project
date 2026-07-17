import React from 'react'

const SortAndView = () => {
    return (
        
            <div className='flex gap-15'>
                {/* Sorting */}
                <div className='relative flex gap-7.5 after:content-[""] after:absolute after:bg-seventh-color after:w-0.5 after:h-5.5 after:top-0 after:-right-7.5'>
                    <select className='font-jost font-medium text-sm text-primary-black leading-6 border-b-2 uppercase'>
                        <option>DEFAULT SORTING</option>
                        <option>default-1</option>
                        <option>default-2</option>
                        <option>default-3</option>
                    </select>
                </div>
                {/* View */}
                <div className='flex gap-3'>
                    <h3 className='font-jost font-medium text-sm text-primary-black leading-6'>VIEW</h3>
                    <button className='font-jost font-medium text-sm text-primary-black leading-6'>2</button>
                    <button className='font-jost font-medium text-sm text-primary-black leading-6'>3</button>
                    <button className='font-jost font-medium text-sm text-primary-black leading-6'>4</button>
                </div>
            </div>
        
    )
}

export default SortAndView