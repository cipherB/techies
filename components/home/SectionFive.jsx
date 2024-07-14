import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: "Routely",
    about: "Routely is a shipping platform helping businesses & individuals with absolutely convenient, fast, and affordable shipping solutions.",
    link: "https://www.routely.co"
  },
  {
    title: "Trades Trek",
    about: "Trades Trek - the ultimate stock trading simulator that will supercharge your investment journey. ",
    link: "https://www.tradestrek.com/"
  },
  {
    title: "Flip-cbt",
    about: "FLIP provides computerized tests, examination management, quick grading systems, and collation of results instead of the use of pen and paper.",
    link: "https://flipcbt.com/"
  },
  {
    title: "rosabon finance",
    about: "Rosabon Financial Services (RFS) Provides loans, leases and investments to eligible individuals, SME businesses and Corporate Organizations",
    link: "https://rosabon-finance.com/"
  },
  {
    title: "stitchvine",
    about: "Stictchvine helps individuals Take their fashion business to the next level.",
    link: "https://stitchvine.com/"
  },
  {
    title: "ShipAfrica",
    about: "shipafrica - Helping business and people to send packages to anyone anywhere in the world",
    link: "https://shipafrica.io/"
  },
]

const SectionFive = () => {
  return (
    <div id="projects" className='max-w-[1300px] my-[120px] mx-auto px-4 md:px-14' >
      <h2 className="capitalize text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-10" >recent projects</h2>
      <div className='w-full grid md:grid-cols-3 gap-x-5 gap-y-[60px]' >
        {
          projects.map((project, id) => (
            <div key={id} >
              <Image 
                src={`/Project${id+1}.png`}
                alt="project"
                className='w-full h-[400px] bg-[#D9D9D9] rounded-2xl'
                height={400}
                width={426.67}
                quality={100} 
              />
              <p className='mt-3 mb-5 text-2xl font-bold capitalize' >{project.title}</p>
              <p className='text-[#575757] mt-2 mb-5' >{project.about}</p>
              <a
                href={project.link}
                className='text-[#014751] font-bold hover:scale-105 hover:underline capitalize text-[17px] flex gap-x-1 items-center'
                target='_blank'
                rel='noreferrer'
              >
                visit live site <FaArrowRight />
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionFive