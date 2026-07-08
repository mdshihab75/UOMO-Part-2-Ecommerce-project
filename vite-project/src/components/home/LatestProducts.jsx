import React, { useEffect, useState } from 'react'
import Container from '../ui/Container'
import axios from 'axios'
import Product from '../common/Product'
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import "slick-carousel/slick/slick.css";
import SliderLib from "react-slick";

const LatestProducts = () => {
    const Slider = SliderLib.default || SliderLib;
    const [products, setProducts] = useState([])
    function getLatestproduct() {
        axios.get("/products.json").then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            throw new Error(err.message ? err.message : "something went wrong")
        })
    }
    useEffect(() => {
        getLatestproduct()
    }, [])

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

    return (
        <section>
            <Container>
                <h3 className='font-jost font-bold text-[35px] text-primary-black text-center mb-8'>LATEST PRDOUCTS</h3>
                <Slider {...settings}>
                    {products.map((item) => (
                        <div key={item.id} className="px-3">
                            <Product item={item} />
                        </div>
                    ))}
                </Slider>
                {/* light line divider */}
                <div className='mt-10'>
                    <div className='max-w-full bg-sixth-color p-1'></div>
                </div>
            </Container>
        </section>
    )
}

export default LatestProducts