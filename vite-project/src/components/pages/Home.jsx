import React from 'react'
import Banner from '../home/Banner'
import HitsCollection from '../home/HitsCollection'
import BestSelling from '../home/BestSelling'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HitsCollection/>
        <BestSelling/>
    </div>
  )
}

export default Home