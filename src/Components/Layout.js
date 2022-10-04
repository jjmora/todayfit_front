import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <main>
      <NavBar />    
      {/* OUTLET Represents all the children of the Layout component */}
      <Outlet /> 
      <Footer />
    </main>
  )
}

export default Layout