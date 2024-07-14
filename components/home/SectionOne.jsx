import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa'
import { scrollToElement } from "../utilities";

const SectionOne = () => {
  return (
    <div id="home" className=" h-[698px] w-screen bg-black mobile:bg-landing bg-cover bg-center bg-no-repeat md:bg-transparent flex justify-center items-center relative">
      <Image
        src="/landing.png"
        alt="landing-image"
        width={1440}
        height={698}
        quality={100}
        className="absolute top-0 left-0 w-screen h-[698px] hidden md:block -z-[1]" 
      />
      <div>
        <h1 className="text-center text-palette-primary capitalize text-5xl md:leading-[70.4px] md:text-[64px] font-bold">
          The Techies
        </h1>
        <h1 className="text-white font-bold text-center text-3xl md:text-[60px] mt-3">
          Innovating the future with tech, Together!
        </h1>
        <div className="justify-center px-4 mt-10 md:flex gap-x-4 md:px-0">
          <button onClick={()=>scrollToElement("contact")} className="bg-transparent border-2 border-palette-primary mb-5 md:mb-0 rounded-[100px] w-full md:w-auto text-sm md:text-xl capitalize font-semibold text-palette-primary py-4 px-12" >
            contact us
          </button>
          <button onClick={()=>scrollToElement("contact")} className="bg-palette-primary border-none rounded-[100px] w-full md:w-auto text-sm md:text-xl font-semibold capitalize text-black px-12 py-4 flex justify-center items-center gap-x-3" >
            <span className='elevator-text'>Get Free Consultation</span> <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
