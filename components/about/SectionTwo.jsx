import React from "react";
import Image from "next/image";

const SectionTwo = () => {
  return (
    <div id="home" className="max-w-[1300px] mobile:px-4 mx-auto py-[60px] relative">
      <div className="grid items-center md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="mobile:order-last" >
          <h2 className="mb-4 text-3xl">Our Vision</h2>
          <p className="text-base leading-7 text-justify text-gray-500 md:pr-20">
            To be recognized as a leading tech agency, synonymous with client
            centricity, excellence, collaboration, and integrity
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/Vision.jpg"
            alt="illustration"
            quality={80}
            width={1000}
            height={760}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
