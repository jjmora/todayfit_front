import React from 'react'
import Card from './Card'
import { Hero } from './Hero'
import Features from './Features'
import Pagination from './Pagination'
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
      <Card />
      {/* CARD SECTION */}

      {/* CARD SECTION */}
      <Pagination />
      {/* CARD SECTION */}
    </section>
  )
}

export default Home