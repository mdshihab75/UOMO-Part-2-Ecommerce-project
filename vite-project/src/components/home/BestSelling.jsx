import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { ProductCategory } from '../../api/ProductCategory'
import Listitems from '../common/Listitems'
const BestSelling = () => {
    const [category, setCategory] = useState ('')
    const handleActive = (name) => {
        setCategory(name)
    }
    function getProduct() {
    axios.get("http://localhost:3000/products").then((res) => {
      setProducts(res.data)
    }).catch((err) => {
      throw new Error(err.message ? err.message : "something went wrong")
    })
  } 
  useEffect(() => {
     getProduct()
  }, [])    
    
  return (
    <section className='mt-23'>
        <Container>
            <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-7.5'>BEST SELLING</h3>
            <ul className='flex gap-12.5 justify-center mb-13.75'>
                {
                    ProductCategory?.map((item) => (
                        <Listitems onClick={() => handleActive(item.name)} className={`${category == item.name ? "font-jost font-medium text-base text-primary-black cursor-pointer relative after:content-[''] after:absolute after:w-0 hover:after:w-[70%] after:h-0.5 after:bg-primary-black after:left-0 after:bottom-0 after:duration-300" : "font-jost font-medium text-base text-fourth-color"}`}>{item.name}</Listitems>
                    ))
                }
            </ul>
        </Container>
    </section>
  )
}

export default BestSelling