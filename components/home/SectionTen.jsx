import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { scrollToElement } from '../utilities'

const SectionTen = () => {
  return (
    <div className='home-bg px-4 md:px-0 py-[60px]' >
        <h1 className='capitalize text-center text-4xl md:text-[64px] md:leading-[76.8px] font-medium mb-10' >
          let us bring your vision to life together
        </h1>
        <div className="flex justify-center mb-10 md:gap-x-10 gap-x-5">
          <p className='text-xs capitalize md:text-2xl' >Deliver on Time</p>
          <p className='text-xs capitalize md:text-2xl' >100% Collaborative Approach</p>
          <p className='text-xs capitalize md:text-2xl' >100% satisfaction guaranteed</p>
        </div>
        <div className="flex justify-center">
          <button onClick={()=>scrollToElement("contact")} className="bg-[#1A1A1A] border-none rounded-[100px] w-full md:w-auto md:px-12 text-sm md:text-xl font-semibold capitalize text-white py-4 flex justify-center items-center gap-x-3">
            <span className='elevator-text' >Get Quote</span> <FaLongArrowAltRight />
          </button>
        </div>
    </div>
  )
}

export default SectionTen