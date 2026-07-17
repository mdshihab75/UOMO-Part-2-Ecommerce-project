import React from 'react'
import ProductCategories from './ProductCategories'
import ColorFilter from './ColorFilter'
import SizeFilter from './SizeFilter'
import BrandFilter from './BrandFilter'
import PriceFilter from './PriceFilter'

const ShopSidebar = () => {
  return (
    <div>
        <ProductCategories/>
        <ColorFilter/>
        <SizeFilter/>
        <BrandFilter/>
        <PriceFilter/>
    </div>
  )
}

export default ShopSidebar