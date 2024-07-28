import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div
      id="home"
      className="max-w-[1300px] mobile:px-4 mx-auto pt-[208px] md:pt-[108px] pb-[60px] relative"
    >
      <div className="grid items-center md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="w-full">
          <Image
            src="/services.jpg"
            alt="illustration"
            quality={80}
            width={1280}
            height={948}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl">Our Services</h2>
          <p className="text-base leading-7 text-justify text-gray-500">
            At TheTechies, we offer a wide range of services designed to
            meet the diverse needs of our clients. Our team of experts is
            dedicated to providing innovative solutions and exceptional service
            to help your business thrive. Explore our services to see how we can
            support your goals and drive your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
