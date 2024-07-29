import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { scrollToElement } from "../utilities";

const SectionSix = () => {
  return (
    <div id="work" className="bg-[#D1E2ED]">
      <div className="max-w-[1300px] pt-10 pb-[100px] md:py-[120px] mx-auto px-4 md:px-14">
        <div className="flex items-center flex-col md:flex-row gap-y-4 justify-between mb-[60px]">
          <div>
            <h2 className="capitalize text-3xl md:text-5xl md:leading-[67.2px] font-bold ">
              We stick to a timeline
              <br /> from start to finish
            </h2>
            <p>Here&apos;s exactly how we do it</p>
          </div>
          <button onClick={()=>scrollToElement("contact")} className="bg-transparent transition-all duration-500 radial-dark flex-col rounded-full w-[191px] hover:border-none h-[194px] border-2 border-[#1A1A1A] text-[#1A1A1A] hover:text-white font-bold text-xl flex items-center justify-center gap-1">
            <span className="flex items-center gap-1">
              <FaArrowRight className="font-extrabold" /> Get <FaArrowLeft className="font-extrabold" />
            </span>
            Started
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-8" >
          {/* Column 1 */}
          <div className="relative" >
            <p className="font-bold" >Stage 1</p>
            <p className="text-2xl font-bold" >The Discovery</p>
            <Image 
              src="/Polygon.svg"
              alt="polygon"
              width={40}
              height={40}
              className="z-10 hidden my-10 md:block"
            />
            <Image 
              src="/DashedLine.svg"
              alt="dashed line"
              width={337}
              height={2}
              className="absolute top-[40%] hidden md:block left-10"
            />
            {/* <div className="absolute w-[1100px] border-black top-[39.5%] h-[1px] border borderc left-10 " ></div> */}
            <p className="" >This is where we get to know you, your business goals & how our expertise can help you gt closer to those goals.</p>
          </div>
          {/* Column 2 */}
          <div className="relative" >
            <p className="font-bold" >Stage 2</p>
            <p className="text-2xl font-bold" >The Kickoff</p>
            <Image 
              src="/Polygon.svg"
              alt="polygon"
              width={40}
              height={40}
              className="z-10 hidden my-10 md:block"
            />
            <Image 
              src="/DashedLine.svg"
              alt="dashed line"
              width={480}
              height={2}
              className="absolute top-[40%] hidden md:block left-10"
            />
            <p className="" >Here, we make our research into your industry and send you a contract outlining the services we&apos;d perform.</p>
          </div>
          {/* Column 3 */}
          <div className="relative md:col-span-2" >
            <p className="font-bold" >Stage 3</p>
            <p className="text-2xl font-bold" >The Design</p>
            <Image 
              src="/Polygon.svg"
              alt="polygon"
              width={40}
              height={40}
              className="z-10 hidden my-10 md:block"
            />
            <Image 
              src="/DashedLineLong.svg"
              alt="dashed line"
              width={480}
              height={2}
              className="absolute top-[40%] hidden md:block left-10"
            />
            <p className="" >Considering the required scope of work and your business needs, we design and develop your website solution.</p>
          </div>
          {/* Column 4 */}
          <div className="relative" >
            <p className="font-bold" >Stage 4</p>
            <p className="text-2xl font-bold" >The Delivery</p>
            <div className="flex justify-between">
              <Image 
                src="/Polygon.svg"
                alt="polygon"
                width={40}
                height={40}
                className="z-10 hidden my-10 md:block"
              />
              <Image 
                src="/Polygon.svg"
                alt="polygon"
                width={40}
                height={40}
                className="z-10 hidden my-10 md:block"
              />
            </div>
            <Image 
              src="/DashedLineShort.svg"
              alt="dashed line"
              width={190}
              height={2}
              className="absolute top-[40%] hidden md:block left-10"
            />
            <p className="" >We deliver your finalized site with the design assets used in your project 1 week after the project start.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
