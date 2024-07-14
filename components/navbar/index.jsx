import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLightningChargeFill, BsX } from 'react-icons/bs'
import { scrollToElement } from '../utilities'
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setScrollPos(window.scrollY)
    }
    const handleScroll = () => {
      if(typeof window !== 'undefined') {
        const currentScrollPos = window.scrollY;
        setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 1000);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, scrollPos]);

  return (
    <div className='w-screen' >
      <nav className={`fixed top-0 left-0 z-20 w-screen overflow-hidden transition-all duration-700 ${scrollPos < 1000 ? "bg-transparent":" bg-black"}`} >
        <div className={`max-w-[1300px] hidden items-center w-full h-full mx-auto md:flex justify-between ${showNavbar ? "max-h-[112.38px] min-h-[112.38px]":"max-h-0"}`} >
          {/* Column 1 */}
          <Image 
            src={"/techies-logo.png"}
            width={143}
            height={40}
            onClick={()=>scrollToElement("home")}
            alt='Techies logo'
            quality={100}
            priority
          />
          {/* Column 2 */}
          <ul className='flex items-center px-0 list-none footer-list gap-x-12' >
            <li>
              <Link 
                href={"#"}
                onClick={()=>scrollToElement("work")}
                className='font-semibold text-white capitalize'
              >
                how we work
              </Link>
              <div></div>
            </li>
            <li>
              <Link 
                href={"#"}
                onClick={()=>scrollToElement("projects")}
                className='font-semibold text-white capitalize'
              >
                Recent projects
              </Link>
              <div></div>
            </li>
            <li>
              <Link 
                href={"#"}
                onClick={()=>scrollToElement("faq")}
                className='font-semibold text-white capitalize'
              >
                FAQ
              </Link>
              <div></div>
            </li>
          </ul>
          {/* Column 3 */}
          <ul className='flex items-center list-none gap-x-6' >
            <button onClick={()=>scrollToElement("contact")} className=' border border-palette-primary bg-transparent rounded-[100px] px-4 py-3 text-palette-primary capitalize font-semibold' >
              contact us
            </button>
            <button onClick={()=>scrollToElement("contact")} className=' border-none bg-palette-primary rounded-[100px] px-4 py-3 gap-x-1 text-black flex justify-center items-center capitalize font-semibold' >
              <BsLightningChargeFill />
              place an order
            </button>
          </ul>
        </div>
      </nav>
      <nav className={`md:hidden z-20 w-screen fixed px-5 top-0 left-0 py-5 bg-black ${scrollPos < 750 ? "bg-transparent":" bg-black"}`} >
        <div className='flex items-center justify-between' >
          <Image 
            src={"/techies-logo.png"}
            width={143}
            height={40}
            onClick={()=>scrollToElement("home")}
            alt='Techies logo'
            quality={100}
            priority
          />
          <HiMenuAlt3 className='text-2xl font-bold text-white' onClick={()=>setOpenMenu(true)} />
        </div>
        <div
        className={`fixed top-0 right-0 h-screen ${
          openMenu ? "max-w-screen-sm" : "max-w-0"
        } md:hidden transition-all duration-500 w-full bg-black`}
      >
        <div className="flex justify-between px-4 mt-10 mb-3">
          <Image 
            src={"/techies-icon.png"}
            width={143}
            height={40}
            onClick={()=>{scrollToElement("home"); setOpenMenu(false);}}
            alt='Techies logo'
            quality={100}
            priority
          />
          <BsX
            className="text-2xl font-bold text-white"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className="flex flex-col justify-end w-full px-4 py-6 list-none border-gray-600 border-y gap-y-5">
          <li>
              <Link 
                href={"#"}
                onClick={()=>{scrollToElement("work"); setOpenMenu(false);}}
                className='font-semibold text-white capitalize'
              >
                how we work
              </Link>
            </li>
            <li>
              <Link 
                href={"#"}
                onClick={()=>{scrollToElement("projects"); setOpenMenu(false);}}
                className='font-semibold text-white capitalize'
              >
                Recent projects
              </Link>
            </li>
            <li>
              <Link 
                href={"#"}
                onClick={()=>{scrollToElement("faq"); setOpenMenu(false);}}
                className='font-semibold text-white capitalize'
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href={"#"}
                onClick={()=>{scrollToElement("contact"); setOpenMenu(false);}}
                className='font-semibold text-white capitalize'
              >
                Contact Us
              </Link>
            </li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Navbar