import React from "react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <div
      id="home"
      className="max-w-[1300px] mobile:px-4 mx-auto md:pt-[208px] pt-[108px] pb-[60px] relative"
    >
      <div className="grid items-center md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="w-full">
          <Image
            src="/contact.jpg"
            alt="illustration"
            quality={80}
            width={1500}
            height={1000}
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl">Contact Us</h2>
          <p className="text-base leading-7 text-justify text-gray-500">
            At TheTechies, we&apos;re always eager to connect with you. Whether
            you have questions, need assistance, or want to discuss how we can
            work together, our team is ready to assist. Get in touch with us
            through our email address or contact number.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
