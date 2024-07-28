"use client"

import Footer from "../footer"
import Navbar from "../navbar"
import SectionOne from "./SectionOne"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

const About = () => {
  return (
    <div>
      <Navbar />
      <>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </>
      <Footer />
    </div>
  )
}

export default About