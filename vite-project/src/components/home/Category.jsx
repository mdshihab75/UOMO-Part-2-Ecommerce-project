import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import axios from 'axios'
import ProductCategory from '../common/ProductCategory'


const Category = () => {
const [products, setProducts] = useState ([])
{/* Product Api Fatch Here*/}
    function getProducts() {
        axios.get("/category.json").then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            throw new Error(err.message ? err.message : "something went wrong")
        })
    }

    useEffect(() => {
        getProducts()
    }, [])
    
  return (
    <section className='bg-primary-white mb-20.5'>
        <Container>
            <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-8'>SHOP BY CATEGORY</h3>
            <div className='grid grid-cols-5 gap-x-7 mb-4.25'>
               {
                 products.map((item) => (
                    <ProductCategory key={item.id} item={item}/>
                ))
               }
            </div>
        </Container>
    </section>
  )
}

export default Category