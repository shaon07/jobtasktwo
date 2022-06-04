import React from 'react'
import Blogs from './Blogs'
import Footer from './Footer'
import Herosec from './Herosec'
import Navbar from './Navbar'
import Service from './Service'

const Mainhome = () => {
  return (
    <>
      <Navbar />
      <Herosec />
      <Service />
      <Blogs />
      <Footer />
    </>
  )
}

export default Mainhome
