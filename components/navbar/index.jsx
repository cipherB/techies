import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLightningChargeFill, BsX } from 'react-icons/bs'
import { HiMenuAlt3 } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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
      <nav className={`fixed top-0 left-0 z-20 w-screen overflow-hidden transition-all duration-700 ${(scrollPos < 1000 && pathname === "/") ? "bg-transparent":" bg-black"}`} >
        <div className={`max-w-[1300px] hidden items-center w-full h-full mx-auto md:flex justify-between ${showNavbar ? "max-h-[112.38px] min-h-[112.38px]":"max-h-0"}`} >
          {/* Column 1 */}
          <Link href={"/"} >
            <Image 
              src={"/techies-logo.png"}
              width={143}
              height={40}
              alt='Techies logo'
              quality={100}
              priority
            />
          </Link>
          {/* Column 2 */}
          <ul className='flex items-center px-0 list-none footer-list gap-x-12' >
            <li>
              <Link 
                href={"/about-us"}
                className='font-semibold text-white capitalize'
              >
                About Us
              </Link>
              <div></div>
            </li>
            <li>
              <Link 
                href={"/services"}
                className='font-semibold text-white capitalize'
              >
                Our Services
              </Link>
              <div></div>
            </li>
            <li>
              <Link 
                href={"/portfolio"}
                className='font-semibold text-white capitalize'
              >
                Portfolio
              </Link>
              <div></div>
            </li>
          </ul>
          {/* Column 3 */}
          <ul className='flex items-center list-none gap-x-6' >
            <button onClick={() => router.push("/contact-us")} className=' border border-white bg-transparent rounded-[100px] px-4 py-3 text-white capitalize font-semibold' >
              contact us
            </button>
            <button onClick={() => router.push("/contact-us")} className=' border-none bg-palette-primary rounded-[100px] px-4 py-3 gap-x-1 text-white flex justify-center items-center capitalize font-semibold' >
              <BsLightningChargeFill />
              place an order
            </button>
          </ul>
        </div>
      </nav>
      <nav className={`md:hidden z-20 w-screen fixed px-5 top-0 left-0 py-5 bg-black ${(scrollPos < 750 && pathname === "/") ? "bg-transparent":" bg-black"}`} >
        <div className='flex items-center justify-between' >
          <Link href={"/"} >
            <Image 
              src={"/techies-logo.png"}
              width={143}
              height={40}
              alt='Techies logo'
              quality={100}
              priority
            />
          </Link>
          <HiMenuAlt3 className='text-2xl font-bold text-white' onClick={()=>setOpenMenu(true)} />
        </div>
        <div
        className={`fixed top-0 right-0 h-screen ${
          openMenu ? "max-w-screen-sm" : "max-w-0"
        } md:hidden transition-all duration-500 w-full bg-black`}
      >
        <div className="flex justify-between px-4 mt-10 mb-3">
          <Link href="/" >
            <Image 
              src={"/techies-icon.png"}
              width={143}
              height={40}
              alt='Techies logo'
              quality={100}
              priority
            />
          </Link>
          <BsX
            className="text-2xl font-bold text-white"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <ul className="flex flex-col justify-end w-full px-4 py-6 list-none border-gray-600 border-y gap-y-5">
          <li>
              <Link 
                href={"/about-us"}
                className='font-semibold text-white capitalize'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href={"/services"}
                className='font-semibold text-white capitalize'
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link 
                href={"/portfolio"}
                className='font-semibold text-white capitalize'
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href={"/contact-us"}
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