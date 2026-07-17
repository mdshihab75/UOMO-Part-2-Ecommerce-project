import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const BrandFilter = () => {
    const brands = [
        { name: "Adidas", count: 2 },
        { name: "Balmain", count: 7 },
        { name: "Balenciaga", count: 10 },
        { name: "Burberry", count: 39 },
        { name: "Kenzo", count: 95 },
        { name: "Givenchy", count: 1092 },
        { name: "Zara", count: 48 },
    ];

    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h3 className="font-jost font-medium text-[18px] text-primary-black">BRANDS</h3>
                <span className="text-primary-black">⌃</span>
            </div>

            {/* Search */}
            <div className="relative mt-4.5">
                <input type="text" placeholder="Search"
                    className="w-full h-11 border px-4 text-sm outline-none"/>
                <IoSearchOutline className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-lg" />
            </div>

            {/* Brand List */}
            <div className="mt-5 space-y-4">
                {brands?.map((brand, index) => (
                    <div key={index} className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" />
                            <p>{brand.name}</p>
                        </div>
                        <span>{brand.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrandFilter