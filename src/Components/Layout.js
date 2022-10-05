import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className='body'>
      <NavBar />    
      {/* OUTLET Represents all the children of the Layout component */}
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default Layout