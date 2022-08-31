import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart}  md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col justify-start flex-1 mr-10">
        <img
          src={logo}
          alt="hoobank logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4 ml-0 md:ml-2`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            className="flex flex-col my-4 ss:my-0 min-w-[150px]"
            key={footerLink.title}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="mt-2 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${
                    index !== footerLink.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-between w-full md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center md:text-left text-[18px] leading-[27px] text-white">
        © 2022 HooBank. All Rights Reserved. <br /> Built by{" "}
        <a
          href="https://www.linkedin.com/in/emanueledelmonte/"
          className="cursor-pointer hover:text-secondary"
          rel="noopener noreferrer"
          target="_blank"
        >
          Emanuele Del Monte
        </a>
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            key={social.id}
            alt={social.id}
            className={`${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            } w-[21px] h-[21px] object-contain cursor-pointer`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
