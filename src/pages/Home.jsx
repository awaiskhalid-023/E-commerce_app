import React from 'react'
import Header from '../components/Header/Header'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Header/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <Newsletter/>
    </div>
  )
}

export default Home
