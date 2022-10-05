import React, { useEffect } from 'react'
import Card from '../components/Card/Card'
import { Hero } from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Pagination from '../components/Pagination'

const Home = () => {
 
  return (
    <section>
      {/* HERO SECTION */}
      <Hero />
      {/* HERO SECTION  */}

      {/* FEATURES SECTION */}
      <Features />
      {/* FEATURES SECTION */}

      {/* CARD SECTION */}
      <Card 
        header="le club"
        header_stroke="PROCHE DE TOI"
      />
      {/* CARD SECTION */}

      {/* CARD SECTION */}
      <Pagination />
      {/* CARD SECTION */}
    </section>
  )
}

export default Home