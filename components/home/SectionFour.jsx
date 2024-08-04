import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { scrollToElement } from "../utilities";
import Link from "next/link";

const SectionFour = () => {
  return (
    <div id="services" className="bg-[#30619d] pt-10 md:pt-[150px] pb-[100px]">
      <div className="max-w-[1300px] my-[60px] mx-auto px-4 gap-y-14 md:px-14 grid grid-cols-1 md:grid-cols-4 gap-x-10">
        {/* Column 1 */}
        <div>
          <h2 className="capitalize text-white text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-10">
            Services you get as a result
          </h2>
          <Link href={"/contact-us"} >
            <button
              className="bg-palette-primary border-none rounded-[100px] w-full text-sm md:text-xl font-semibold capitalize text-white py-4 flex justify-center items-center gap-x-3"
            >
              <span className="elevator-text">Get Quote</span>{" "}
              <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
        {/* Column 2 */}
        <div className="md:col-span-3">
          <div className="grid w-full h-full grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Row 1 */}
            <div className=" md:col-span-2 mb-16 md:mb-0 rounded-3xl bg-gradient-black md:flex justify-between py-8 md:py-[50px] items-center px-5 md:px-10">
              <div className=" lg:w-[300px] w-full">
                <h4 className="text-[30px] text-white font-bold mb-6">
                  Complete Ux Audit
                </h4>
                <p className=" leading-[21px] text-[#B3B3B3]">
                  We delve deep into your website&apos;s user experience,
                  identifying areas for improvement and optimization to enhance
                  user satisfaction and drive engagement.
                </p>
              </div>
              <Image
                src={"/businessman-giving-a-keynote.png"}
                alt="illustration"
                width={220}
                height={220}
                quality={100}
              />
            </div>
            {/* Row 2 Column 1 */}
            <div className="bg-gradient-yellow py-[60px] px-5 md:px-10 rounded-3xl">
              <div className="mb-16 ">
                <h4 className="text-[30px] font-bold mb-6">Data Services</h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  Efficiently collect, store, and manage your data with our
                  robust data management solutions. Our services ensure your
                  data is organized, secure, and easily accessible, enabling you
                  to make informed decisions with confidence.
                </p>
              </div>
              <Image
                src={"/Business-Startup-Woman-Led-Startup-Company.png"}
                alt="illustration"
                width={200}
                height={172}
                quality={80}
              />
            </div>
            {/* Row 2 Column 2 */}
            <div className="bg-gradient-blue py-[60px] px-5 md:px-10 rounded-3xl">
              <div className="mb-16 ">
                <h4 className="text-[30px] font-bold mb-6">
                  Updated and modernized websites
                </h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  We transform outdated websites into modern, visually stunning
                  platforms that captivate audiences and reflect your
                  brand&apos;s essence.
                </p>
              </div>
              <Image
                src={"/conversation-businessman-and-customer.png"}
                alt="illustration"
                width={200}
                height={166}
                quality={80}
              />
            </div>
            {/* Row 3 */}
            <div className=" md:col-span-2 mb-16 md:mb-0 rounded-3xl bg-gradient-grey md:flex justify-between py-8 md:py-[50px] items-center px-5 md:px-10">
              <div className=" lg:w-[300px]">
                <h4 className="text-[30px] font-bold mb-6">
                  Completely Responsive sites
                </h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  We craft websites that adapt effortlessly to various screen
                  sizes and devices, maximizing accessibility and engagement for
                  every visitor.
                </p>
              </div>
              <Image
                src={"/InterfaceTesting.png"}
                alt="illustration"
                width={220}
                height={220}
                quality={80}
              />
            </div>
            {/* Row 4 Column 1 */}
            <div className="bg-gradient-blue py-[60px] px-5 md:px-10 rounded-3xl">
              <div className="mb-16 ">
                <h4 className="text-[30px] font-bold mb-6">
                  Web Hosting and domain services
                </h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  From domain registration to reliable hosting solutions, we
                  provide the infrastructure and support you need to establish
                  and maintain a robust online presence.
                </p>
              </div>
              <Image
                src={"/WebHosting.png"}
                alt="illustration"
                width={200}
                height={200}
                quality={80}
              />
            </div>
            {/* Row 4 Column 2 */}
            <div className="bg-gradient-black py-[60px] px-5 md:px-10 rounded-3xl">
              <div className="mb-16 ">
                <h4 className="text-[30px] text-white font-bold mb-6">
                  Talent as a Service
                </h4>
                <p className=" leading-[21px] text-[#B3B3B3]">
                  Access a vast pool of skilled professionals when you need
                  them. Whether you require short-term project assistance or
                  long-term strategic support, our service provides you with
                  experts across various domains to meet your specific needs.
                </p>
              </div>
              <Image
                src={"/ProductSiteBuilder.png"}
                alt="illustration"
                width={200}
                height={200}
                quality={80}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
