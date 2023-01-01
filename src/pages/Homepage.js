import React from 'react'
import Annoucments from '../components/Announcment/Annoucments'
import Categories from '../components/Catrgories/Categories'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Prodects from '../components/Products/Prodects'
import Silder from '../components/Slider/Silder'

const Homepage = () => {
  return (
    <>
    <Annoucments/>
    <Navbar/>
    <Silder/>
    <Categories/>
    <Prodects />
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Homepage
