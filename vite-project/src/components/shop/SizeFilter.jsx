import React from 'react'

const SizeFilter = () => {
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div>
        {/* Sizes */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black">SIZES</h3>

              <span className="text-primary-black">⌃</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-5.75">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="w-10 h-10 border text-xs font-medium text-gray-600 hover:bg-black hover:text-white duration-300"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
    </div>
  )
}

export default SizeFilter