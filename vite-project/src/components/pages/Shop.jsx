import React, { useEffect, useState } from 'react'
import ShopBanner from '../shop/ShopBanner'
import Container from '../ui/Container'
import BreadCrumb from '../common/BreadCrumb'
import SortAndView from '../shop/Sort&View'
import ShopSidebar from '../shop/ShopSidebar'
import ProductCategoriesTitle from '../shop/ProductCategoriesTitle'
import ProductGrid from '../shop/ProductGrid'
import Paginate from '../common/Paginate'
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([])

  {/* Product Api Fatch Here*/ }
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

  const [view, setView] = useState(4)
  return (
    <main>
      <ShopBanner />

      <Container>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-15">
            <ProductCategoriesTitle />
            <BreadCrumb />
          </div>
          <SortAndView setView={setView} />
        </div>

        {/* Main Content */}
        <div className="flex gap-15">
          <ShopSidebar />

          <div className="flex-1">
            <ProductGrid
              products={products}
              view={view}
            />

            <Paginate
              items={products}
              itemsPerPage={4}
            />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Shop