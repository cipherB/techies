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
            src="/projects.jpg"
            alt="illustration"
            quality={80}
            width={1000}
            height={667}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl">Recent Projects</h2>
          <p className="text-base leading-7 text-justify text-gray-500">
            Explore a curated selection of our latest and greatest projects.
            Each project is a testament to our commitment to excellence,
            innovation, and customer satisfaction. Dive into the details to see
            how we bring ideas to life and deliver solutions that make a
            difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
