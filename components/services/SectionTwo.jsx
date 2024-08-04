import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const SectionTwo = () => {
  return (
    <div id="services" className=" py-[60px]">
      <div className="max-w-[1300px] my-[60px] mx-auto px-4 gap-y-14 md:px-14 grid grid-cols-1 md:grid-cols-4 gap-x-10">
        {/* Column 1 */}
        <div>
          <h2 className="capitalize text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-10">
            Services you get as a result
          </h2>
          <Link href={"/contact-us"} >
            <button
              // onClick={() => scrollToElement("contact")}
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
                  User Interface/User Experience (UI/UX) Design
                </h4>
                <p className=" leading-[21px] text-[#B3B3B3]">
                  Designing user-centric interfaces for optimal user interaction
                  and experience.
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
                <h4 className="text-[30px] font-bold mb-6">
                  Data Analytics & Business Intelligence
                </h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  Data is the new gold, but raw data alone isn&apos;t enough.
                  TheTechies helps you unlock the hidden potential within your
                  data. Our team of data scientists leverages cutting-edge tools
                  and techniques to extract valuable insights. We translate
                  complex data points into actionable information that empowers
                  you to make data-driven decisions, optimize strategies, and
                  achieve your business objectives.
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
                  Mobile App Development
                </h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  We are experts in crafting engaging and user-friendly mobile
                  applications for iOS and Android platforms. Whether you need a
                  B2B app to enhance communication with partners or a B2C app to
                  connect directly with your customers, TheTechies can design,
                  develop, and launch a high-performing mobile app that drives
                  results.
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
                <h4 className="text-[30px] font-bold mb-6">Cloud Solutions</h4>
                <p className=" leading-[21px] text-[#4D4D4D]">
                  In today&apos;s digital age, leveraging the power of cloud
                  computing is crucial. TheTechies provides secure and scalable
                  cloud solutions tailored to your needs. We can help you
                  migrate your existing infrastructure to the cloud, manage your
                  cloud environment, and ensure optimal performance and
                  security.
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
                  Custom Software Development
                </h4>
                <p className=" leading-[21px] text-[#B3B3B3]">
                  Our team of skilled developers crafts bespoke software
                  solutions to streamline your workflows, automate processes,
                  and enhance operational efficiency. Whether you require a
                  complex enterprise resource planning (ERP) system, a
                  user-friendly customer relationship management (CRM) platform,
                  or a specialized internal tool, TheTechies can build it from
                  scratch to perfectly match your requirements.
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
      <div className="mx-auto max-w-[1300px]">
        <p className="mt-10 text-2xl font-bold text-center">
          “By choosing TheTechies, you gain a trusted partner dedicated to
          helping you harness the power of technology and achieve your business
          goals.” - CEO
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
