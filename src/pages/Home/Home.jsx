import React from 'react'
import MainBanner from '../../layouts/MainBanner/MainBanner'
import Features from '../../layouts/Features/Features'
import Services from '../../layouts/Services/Services'
import Prices from '../../layouts/Prices/Prices'
import Stats from '../../layouts/Stats/Stats'
import CTA from '../../layouts/CTA/CTA'

const Home = () => {
  return (
    <div>
       <MainBanner/>
       <Services/>
       <Features/>
       <Stats/>
       <Prices/>
       <CTA/>
    </div>
  )
}

export default Home
