import React from 'react'

const ColorFilter = () => {
    const colors = [
    "bg-blue-900",
    "bg-yellow-500",
    "bg-gray-500",
    "bg-sky-200",
    "bg-yellow-700",
    "bg-amber-500",
    "bg-orange-200",
    "bg-white border-2 border-gray-400",
    "bg-red-400",
    "bg-green-200",
  ];
  return (
    <div>
        {/* Colors */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="font-jost font-medium text-[18px] text-primary-black">COLOR</h3>
              <span className="text-primary-black">⌃</span>
            </div>

            <div className="grid grid-cols-6 gap-6.25 mt-5.75 ">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full cursor-pointer focus:outline-3 focus:outline-primary-black ${color}`}
                ></button>
              ))}
            </div>
          </div>
    </div>
  )
}

export default ColorFilter