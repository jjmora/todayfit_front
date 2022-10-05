import React from 'react'
import Card from '../components/Card/Card'
import { Hero } from '../components/Hero/Hero'
import image1 from '../assets/images/gym1.jpg'
const Franchise = () => {
  return (
    <section className='container mt-5'>
      <Hero 
        header=""
        header_stroke="MA FRANCHISE"
        image={image1}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        button_text="Contact"
      />
      <Card 
        header="Mes Clubs"
      />
    </section>
  )
}

export default Franchise