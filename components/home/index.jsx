"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import SectionOne from './SectionOne'
// import SectionThree from './SectionThree'
// import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import SectionSeven from './SectionSeven'
import SectionEight from './SectionEight'
// import SectionNine from './SectionNine'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTwo from './SectionTwo'
import SectionTen from './SectionTen'
import 'react-tooltip/dist/react-tooltip.css'
// import SectionEleven from './SectionEleven'

const LandingPage = () => {
  const [showScreen, setShowScreen] = useState(true);
  const [message, setMessage] = useState("TheTechies");

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setMessage("Imagine it, We build it”");
    }, 4000); // Change message after 4 seconds

    const secondTimeout = setTimeout(() => {
      setShowScreen(false);
    }, 5000); // Hide screen after 8 seconds

    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <div>
      {
        showScreen && (
          <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-palette-primary' >
            <h1 className={`transition-all duration-300 ${message === "Techies" ? "md:text-[64px] text-4xl font-semibold text-sky-500 animate-pulse" : "text-white duration-[4s] animate-pulse font-medium text-2xl md:text-3xl"}`} >{message} </h1>
          </div>
        )
      }
      <Navbar />
      <>
        <SectionOne />
        <SectionTwo />
        {/* <SectionThree /> */}
        {/* <SectionFour /> */}
        <SectionFive />
        {/* <SectionEleven /> */}
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        {/* <SectionNine /> */}
        <SectionTen />
      </>
      <Footer />
    </div>
  )
}

export default LandingPage