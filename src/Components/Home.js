import React from 'react'
import Card from './Card'
import { Hero } from './Hero'
import Features from './Features'
const Home = () => {
  return (
    <section className='main-section'>
      {/* HERO SECTION */}
      <Hero />
      {/* HERO SECTION  */}

      {/* FEATURES SECTION */}
      <Features />
      {/* FEATURES SECTION */}

      {/* CARD SECTION */}
      <Card />
      {/* CARD SECTION */}
    </section>
  )
}

export default Home