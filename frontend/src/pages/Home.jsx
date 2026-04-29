import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import TrendingNow from '../components/TrendingNow'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const home = () => {
  return (

    <div>
      <Hero/>
      <LatestCollection/>
      <TrendingNow/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default home