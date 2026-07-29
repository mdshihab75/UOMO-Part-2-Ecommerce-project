import React from 'react'
import ProductCard from './ProductCard';
import Paginate from '../common/Paginate';

const ProductGrid = ({products, view}) => {
    
  return (
    <div className={`grid gap-7.5 mb-14 ${
    view === 2
      ? "grid-cols-2"
      : view === 3
      ? "grid-cols-3"
      : "grid-cols-4"
      }`}>
  {products?.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))} 
  
</div>
  )
}

export default ProductGrid