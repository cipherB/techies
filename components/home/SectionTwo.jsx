import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";

const SectionTwo = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, [])

  var settingsTR = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          centerPadding: "0px"
        }
      },
    ]
  };

  var settingsTL = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    rtl: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          centerPadding: "0px"
        }
      },
    ]
  };
  if(domLoaded) {
    return (
      <div className='py-5 md:py-[60px] md:block bg-blue-200' >
        <div className='md:mb-10' >
          <Slider {...settingsTR} >
            <div className='px-4' >
              <Image
                src="/sectiontwo/Chalana.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Dashboard.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Erevna.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Footer.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Lyseis.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Pecuniarum.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
          </Slider>
        </div>
        <div>
          <Slider {...settingsTL} >
            <div className='px-4'>
              <Image
                src="/sectiontwo/Routely.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Stoneman.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/StonemanLaw.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/TradesTrek.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
            <div className='px-4'>
              <Image
                src="/sectiontwo/Vendoor.png" 
                alt="project illustrate"
                width={657.78}
                height={370}
                className='md:w-[657.78px] md:h-[370px] w-[312px] h-[194px]'
                quality={100}
              />
            </div>
          </Slider>
        </div>
      </div>
    )
  } else return null;
}

export default SectionTwo