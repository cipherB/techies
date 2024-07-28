import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrollToElement } from "../utilities";

const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] px-4 md:px-[60px] pt-[80px]">
      <div className="py-[31px] flex justify-between flex-col md:flex-row gap-y-3 items-center mb-8">
        <Link href={"/"} >
          <Image
            src="/techies-logo.png"
            alt="logo"
            onClick={() => scrollToElement("home")}
            width={209.11}
            height={45}
            quality={100}
          />
        </Link>
        <div>
          <ul className="flex flex-col flex-wrap p-0 pt-6 mb-3 list-none footer-list gap-x-3 md:flex-row gap-y-3 md:pt-0 md:justify-end md:gap-x-6">
          <li >
              <Link
                href={"/about-us"}
                className="text-[#cccccc] font-medium"
              >
                About Us
              </Link>
              <div></div>
            </li>
            <li>
              <Link
                href={"/services"}
                className="text-[#cccccc] font-medium"
              >
                Our Services
              </Link>
              <div></div>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                className="text-[#cccccc] font-medium"
                // onClick={() => scrollToElement("projects")}
              >
                Recent Projects
              </Link>
              <div></div>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-[#cccccc] font-medium"
                onClick={() => scrollToElement("faq")}
              >
                Faq
              </Link>
              <div></div>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className="text-[#cccccc] font-medium"
                // onClick={() => scrollToElement("work")}
              >
                Contact Us
              </Link>
              <div></div>
            </li>
          </ul>
          <Image src="/DividerShort.svg" alt="divider" width={717} height={1} />
          <ul className="flex p-0 mt-3 list-none md:justify-end gap-x-6">
            <li>
              <div href={"/"} className="text-[#cccccc] font-medium">
                Get In Touch:{" "}
                <a
                  className="font-bold no-underline"
                  href="mailto:official.techies@gmail.com"
                >
                  official.techies@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Image src={"/DividerLong.svg"} alt="divider" width={1320} height={1} />
      <div className="flex flex-col-reverse justify-between py-10 md:flex-row gap-y-6 md:mt-8">
        <p className="m-0 text-[#B3B3B3] text-center capitalize md:text-left">
          © 2023 <span className="font-bold">Techies</span>. all rights reserved
        </p>
        <ul className="flex list-none footer-list md:justify-end gap-x-6">
          <li>
            <Link href={"/"} className="text-[#cccccc] font-medium">
              Privacy Policy
            </Link>
            <div></div>
          </li>
          <li>
            <Link href={"/"} className="text-[#cccccc] font-medium">
              Terms & Conditions
            </Link>
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
