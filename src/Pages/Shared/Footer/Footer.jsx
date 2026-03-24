import React from "react";
import Logo from "../../../components/Logo/Logo";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer rounded-2xl footer-horizontal text-white footer-center p-10 bg-black">
      <aside>
        <Logo></Logo>
        <p className="font-bold md:max-w-200">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </aside>
      <div className="md:flex gap-6">
        <a className="link link-hover no-underline">Services</a>
        <a className="link link-hover no-underline">Coverage</a>
        <a className="link link-hover no-underline">About Us</a>
        <a className="link link-hover no-underline">Pricing</a>
        <a className="link link-hover no-underline">Blog</a>
        <a className="link link-hover no-underline">Contact</a>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <FaLinkedin className="text-[#0575B3]" size={24}/>
         <BsTwitterX size={22}/>
        <FaFacebookSquare className="text-[#006AFF] bg-white " size={24}/>
          <FaYoutube size={30} className="text-red-600 bg-white"/>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
