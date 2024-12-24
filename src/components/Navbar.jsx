import React, { useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";


const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div id="home" className="flex    justify-between md:px-16 px-4 md:h-[12vh] h-[10vh] items-center">
        <div>
          <h1 className="text-2xl  md:text-2xl font-bold">Jatin Jain</h1>
        </div>
        <div
          className="md:hidden block cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <TiThMenu className="text-2xl" />
        </div>
   
        <div className="hidden  md:block">
          <ul className="flex gap-4 font-semibold text-gray-500">
           
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#education">Education</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#experience">Experience</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"><a href="#contact">Contact</a>
            </li>

      
          </ul>
        </div>
        {/* <motion.div className="hidden md:block">
          <div className="flex  font-semibold  hover:bg-black hover:text-white text-center justify-center items-center gap-2 border border-black px-4 py-1 rounded-full transition-all duration-300 ease-in">
            <a
              href="/public/myresume (21).pdf"
              className=""
              download
            >
              Resume
            </a>
            <FaArrowDown className="" />
          </div>
        </motion.div> */}

<div className="btn-container">
  <button
    className="btn btn-color-2 flex  font-semibold  hover:bg-black hover:text-white text-center justify-center items-center gap-2 border border-black px-4 py-1 rounded-full transition-all duration-300 ease-in"
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/public/jatin-resume.pdf";
      link.download = "My_Resume.pdf";
      link.click();
    }}
  >
    Download CV
  </button>
</div>

      <div
        className={`flex flex-col items-center justify-center text-center md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          mobileNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileNav(false)}
      />
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-slate-300 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="font-semibold text-center text-black text-xl space-y-5 pt-6">
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
            }}
          >
            Home
          </li>
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
              window.location.href = "https://github.com/jatinshakya809";
            }}
          >
            Project
          </li>
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
              window.location.href = "https://www.linkedin.com/in/jatin-shakya";
            }}
          >
            About
          </li>
        </ul>
        </div>
    </div>
    </>
  );
};

export default Navbar;
