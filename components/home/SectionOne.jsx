import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { scrollToElement } from "../utilities";
import { ReactTyped } from "react-typed";

const SectionOne = () => {
  return (
    <div
      id="home"
      className=" h-[698px] w-screen bg-gradient-to-r from-palette-primary to-black mobile:bg-landing bg-cover bg-center bg-no-repeat flex justify-end items-center relative"
    >
      <Image
        src="/landing01.jpg"
        alt="landing-image"
        width={1440}
        height={698}
        quality={100}
        className="absolute mix-blend-lighten top-0 left-0 w-1/2 h-[698px] hidden md:block z-[1]"
      />
      <div className="z-[2] md:w-1/2 md:pl-10">
        <h1 className=" text-palette-primary mobile:text-center  capitalize text-5xl md:leading-[90.4px] md:text-[64px] font-bold">
          <span className="text-white">Your Trusted Partner for</span>{" "}
          <ReactTyped
            strings={[
              "MVP Development",
              "Software Development",
              "UX UI Design",
            ]}
            loop
            typeSpeed={40}
          />
        </h1>
        <p className="text-white font-light mobile:text-center md:leading-[40.4px] text-lg md:text-xl mt-3">
          We work with ambitious brands to ideate, design & build million dollar
          businesses powered by beautifully designed and engineered softwares
          and technological solutions.
        </p>
        <div className="px-4 mt-10 mobile:justify-center md:flex gap-x-4 md:px-0">
          <button
            onClick={() => scrollToElement("contact")}
            className="bg-transparent border-2 border-white mb-5 md:mb-0 rounded-[100px] w-full md:w-auto text-sm md:text-xl capitalize font-semibold text-white py-4 px-12"
          >
            contact us
          </button>
          <button
            onClick={() => scrollToElement("contact")}
            className="bg-palette-primary border-none rounded-[100px] w-full md:w-auto text-sm md:text-xl font-semibold capitalize text-white px-12 py-4 flex justify-center items-center gap-x-3"
          >
            <span className="elevator-text">Get Free Consultation</span>{" "}
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
