import Image from 'next/image'
import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdInfo } from 'react-icons/md';
import { Tooltip } from 'react-tooltip'

const SectionNine = () => {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    email: "",
    message: "",
    other_info: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className='bg-[#D1E2ED] pt-10 md:pt-[150px] pb-[100px]' >
      <Tooltip id="my-tooltip" />
      <div className="max-w-[1300px] my-[60px] mx-auto px-4 md:px-14 grid md:grid-cols-6 gap-x-10">
        {/* Column 1 */}
        <div className='md:col-span-2 ' >
          <h2 className="capitalize text-3xl md:text-5xl leading-[2rem] inline-block font-bold pb-5 mb-6">
            <span className="flex items-center gap-x-5">
              drop us{" "}
              <Image
                src={"/ArrowRight.svg"}
                alt="Arrow right"
                width={64}
                height={38.34}
                className='hidden md:block'
              />
            </span>{" "}
            <br className='hidden md:block' />
            a message
          </h2>
          <p className='text-lg' >No worries. Your business insights and stats are safe and secure with us.</p>
        </div>
        <div className='md:col-span-4' >
          <div className='grid grid-cols-1 mb-4 gap-y-4 md:grid-cols-2 gap-x-6' >
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder='Your Name'
              className='bg-white h-[56px] md:h-[84px] rounded-2xl w-full pl-6'
            />
            <input 
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleInput}
              placeholder='Company Name'
              className='bg-white h-[56px] md:h-[84px] rounded-2xl w-full pl-6'
            />
          </div>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder='Your Email'
            className='bg-white h-[56px] md:h-[84px] rounded-2xl w-full pl-6 mb-4'
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInput}
            placeholder='Type in your message'
            className='w-full p-6 mb-8 bg-white rounded-2xl'
            rows={4}
          ></textarea>
          <span className='flex items-start gap-2 mb-4' >
            <p className='text-xl font-bold md:text-3xl' >Additional Information</p>
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Provide additional info"
              data-tooltip-place="top"
            ><MdInfo className='font-bold text-black' /></a>
          </span>
          <textarea
            name="other_info"
            value={formData.other_info}
            onChange={handleInput}
            placeholder='Type in additional information you might want us to know'
            className='w-full p-6 mb-8 bg-white rounded-2xl'
            rows={4}
          ></textarea>
          <button className='bg-[#1A1A1A] mb-10 text-white px-12 py-4 rounded-[100px] text-sm md:text-xl font-semibold capitalize border-none flex justify-center items-center gap-x-3' >
            <span className='elevator-text'>send us a message</span>
            <FaLongArrowAltRight />
          </button>
          <p className='font-medium md:text-2xl' >Or email us at</p>
          <h2 className='text-2xl underline md:text-4xl' >official.techies@gmail.com</h2>
        </div>
      </div>
    </div>
  )
}

export default SectionNine