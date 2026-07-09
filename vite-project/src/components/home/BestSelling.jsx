import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { ProductCategoryData } from '../../api/ProductCategoryData'
import Listitems from '../common/Listitems'
import axios from 'axios'
import Product from '../common/Product'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";

const BestSelling = () => {
  const Slider = SliderLib.default || SliderLib;
  const [category, setCategory] = useState("all")
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [productLimit, setProductLimit] = useState([])

  {/* Category Interactive Part Here*/}
  const handleActive = (name) => {
    setCategory(name)
    const filteredProducts = products.filter((item) => item.category === name);
    setFilteredProducts(filteredProducts)
  }
  {/* Arrows Start Here*/}
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} absolute -right-12.25 top-1/2 translate-y-[-50%]`}
        onClick={onClick}
      ><TfiAngleRight className='text-[25px]' /></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} absolute -left-12.25 top-1/2 translate-y-[-50%] z-10`}
        onClick={onClick}
      ><TfiAngleLeft className='text-[25px]' /></div>
    );
  }
  {/* Arrows Ends Here*/}
  const settings = {
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  {/* Product Api Fatch Here*/}
  function getProduct() {
    axios.get("/products.json").then((res) => {
      setProducts(res.data);

    }).catch((err) => {
      throw new Error(err.message ? err.message : "something went wrong")
    })
  }
  useEffect(() => {
    getProduct()
  }, [])



  return (
    <section className='mt-23 mb-25'>
      <Container>
        <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-7.5'>BEST SELLING</h3>
        <ul className='flex gap-12.5 justify-center cursor-pointer mb-13.75'>
          {
            ProductCategoryData?.map((item) => (
              <Listitems onClick={() => handleActive(item.name)} className={`${category == item.name ? "font-jost font-medium text-base text-primary-black relative after:content-[''] after:absolute after:w-0 hover:after:w-[70%] after:h-0.5 after:bg-primary-black after:left-0 after:bottom-0 after:duration-300" : "font-jost font-medium text-base text-fourth-color"}`}>{item.label}</Listitems>
            ))
          }
        </ul>
        <Slider {...settings}>
          {products.map((item) => (
            <div key={item.id} className="px-3">
              <Product item={item} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default BestSelling