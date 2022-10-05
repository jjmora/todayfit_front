import React, { useEffect } from 'react'
import Card from '../components/Card/Card'
import { Hero } from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Pagination from '../components/Pagination'
import image1 from '../assets/images/gym1.jpg'
const Home = () => {
 
  return (
    <section>
      {/* HERO SECTION */}
      <Hero 
        header="LES CLUBS"
        header_stroke="PLUS DE 100 EN FRANCE"
        image={image1}
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        button_text="Explorer les clubs"
      />
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