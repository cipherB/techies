import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { scrollToElement } from '../utilities'

const businessInfo = [
  {
    title: "consultative approach",
    description: "Partnering closely with you, we tailor solutions to your unique goals and vision, ensuring impactful results.",
    image: "/Business-Business-deal-Success.png"
  },
  {
    title: "6+ years of experience",
    description: "We deliver proven solutions honed through diverse projects. Trust us to bring your vision to life with precision and excellence.",
    image: "/designing-a-website.png"
  },
  {
    title: "fast turnaround & efficient flow",
    description: "Speed matters. Our streamlined processes ensure quick turnaround times, so you can launch your website & connect with your audience sooner.",
    image: "/Business-Business-trip.png"
  },
  {
    title: "total confidentiality. ",
    description: "No worries. Your business insights, ideas, data, and information are safe and secure with us.",
    image: "/protect-privacy.png"
  },
  {
    title: "commitment to excellence",
    description: "From the initial consultation to the final delivery, we are dedicated to delivering top-notch services that exceed your expectations.",
    image: "/Business-Strategy-Introduction-of-Product.png"
  },
  {
    title: "always on brand",
    description: "Your brand's uniqueness is our priority. Our team collaborates closely with you to capture your identity, values, and vision.",
    image: "/Designer-working.png"
  },
]

const SectionSeven = () => {
  return (
    <div className="bg-[#30619d] pt-10 md:pt-[150px] pb-[100px]">
      <div className="max-w-[1300px] gap-y-10 my-[60px] mx-auto px-4 md:px-14 grid grid-cols-1 md:grid-cols-4 gap-x-10">
        {/* Column 1 */}
        <div >
          <h2 className="capitalize text-white text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-4 md:mb-10">
            What makes us special?
          </h2>
          <button onClick={()=>scrollToElement("contact")} className="bg-[#1A1A1A] border-none rounded-[100px] w-full text-sm md:text-xl font-semibold capitalize text-white py-4 flex justify-center items-center gap-x-3">
            <span className='elevator-text' >place an order</span> <FaLongArrowAltRight />
          </button>
        </div>
        {/* Column 2 */}
        <div className="md:col-span-3">
          <div className="grid w-full h-full grid-cols-1 gap-4 md:grid-cols-3">
            {
              businessInfo.map((business, id) => (
                <div key={id} className=" rounded-3xl gap-y-[18px] bg-gradient-black flex-col flex justify-between py-10 px-6">
                  <div>
                    <p className='text-white font-bold text-[30px] mb-6' >{business.title}</p>
                    <p className='text-[#B3B3B3] text-sm' >{business.description}</p>
                  </div>
                  <Image 
                    src={business.image}
                    alt={business.title}
                    width={160}
                    height={160}
                    quality={100}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSeven