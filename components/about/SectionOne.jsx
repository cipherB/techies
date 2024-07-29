import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div
      id="home"
      className="max-w-[1300px] mobile:px-4 mx-auto pt-[108px] md:pt-[208px] pb-[60px] relative"
    >
      <div className="grid items-center md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="w-full">
          <Image
            src="/about.jpg"
            alt="illustration"
            quality={80}
            width={1500}
            height={1000}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl">About Us</h2>
          <p className="text-base leading-7 text-justify text-gray-500" >
            TheTechies leverages a wide creative team with in-depth experience
            to empower organizations with a comprehensive suite of technological
            solutions. We bridge the gap between technology and businesses,
            fostering innovation and growth. TheTechies operates across Nigeria,
            and West-african regions. This global reach allows us to tap into a
            diverse talent pool, ensuring we deliver solutions tailored to your
            specific needs.<br/> Whether you require robust software solutions,
            transformative data analytics, lasting cloud solutions or a unique
            UI/UX, TheTechies offers a comprehensive suite of services to propel
            your organization forward. We are committed to being your trusted
            partner in navigating the ever-evolving technological landscape
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
