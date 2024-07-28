import React from "react";
import Image from "next/image";

const SectionThree = () => {
  return (
    <div id="home" className="max-w-[1300px] mobile:px-4 mx-auto py-[60px] relative">
      <div className="grid items-center md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="w-full">
          <Image
            src="/Mission.jpg"
            alt="illustration"
            quality={80}
            width={4584}
            height={4584}
          />
        </div>
        <div className="md:pl-20" >
          <h2 className="mb-4 text-3xl">Our Mission</h2>
          <p className="text-base leading-7 text-justify text-gray-500">
            To unlock the full potential of businesses through the power of
            technology, fostering growth, innovation, and a competitive edge in
            the ever evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
