import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: "Routely",
    about: "Routely is a shipping platform helping businesses & individuals with absolutely convenient, fast, and affordable shipping solutions.",
    timeline: "2 months 1 week",
    technologies: "React JS, PHP, Paystack, CPanel",
    domain: "Logistics"
  },
  {
    title: "Trades Trek",
    about: "Trades Trek - the ultimate stock trading simulator that will supercharge your investment journey. ",
    timeline: "3 months",
    technologies: "React JS, JAVA Springboot, CPanel",
    domain: "Finance"
  },
  {
    title: "Flip-cbt",
    about: "FLIP provides computerized tests, examination management, quick grading systems, and collation of results instead of the use of pen and paper.",
    timeline: "4 months",
    technologies: "React JS, Laravel, CPanel",
    domain: "Education"
  },
  {
    title: "rosabon finance",
    about: "Rosabon Financial Services (RFS) Provides loans, leases and investments to eligible individuals, SME businesses and Corporate Organizations",
    timeline: "6 months",
    technologies: "React JS, JAVA Springboot, CPanel, Flutter",
    domain: "Finance"
  },
  {
    title: "stitchvine",
    about: "Stictchvine helps individuals Take their fashion business to the next level.",
    timeline: "2 months",
    technologies: "React JS, Laravel, CPanel, Flutter",
    domain: "Fashion"
  },
  {
    title: "ShipAfrica",
    about: "shipafrica - Helping business and people to send packages to anyone anywhere in the world",
    timeline: "1 month 2 weeks",
    technologies: "React JS, PHO, CPanel",
    domain: "Logistics"
  },
]

const SectionTwo = () => {
  return (
    <div id="projects" className='max-w-[1300px] py-[60px] mx-auto px-4 md:px-14' >
      {/* <h2 className="capitalize text-3xl md:text-5xl md:leading-[67.2px] font-bold mb-10" >recent projects</h2> */}
      <div className='w-full grid md:grid-cols-2 gap-x-32 gap-y-[60px]' >
        {
          projects.map((project, id) => (
            <div key={id} className='' >
              <Image 
                src={`/Project${id+1}.png`}
                alt="project"
                className='w-full h-[400px] bg-[#D9D9D9] rounded-2xl'
                height={600}
                width={726.67}
                quality={100} 
              />
              <p className='mt-3 mb-5 text-2xl font-bold capitalize' >{project.title}</p>
              <p className='text-[#575757] mt-2 mb-5' >{project.about}</p>
              <p className='text-[#575757] mt-2 mb-5' ><span className='font-semibold' >Domain: </span> {project.domain}</p>
              <p className='text-[#575757] mt-2 mb-5' ><span className='font-semibold' >Timeline: </span> {project.timeline}</p>
              <p className='text-[#575757] mt-2 mb-5' ><span className='font-semibold' >Technologies: </span> {project.technologies}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SectionTwo