"use client"

import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const Services = () => {
  return (
    <div>
      <Navbar />
      <>
        <SectionOne />
        <SectionTwo />
      </>
      <Footer />
    </div>
  )
}

export default Services