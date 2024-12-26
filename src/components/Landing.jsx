import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
const Landing = () => {
  const circleRadius = 192; // Radius of the circular path

  // Define the keyframes for the circular path
  const generateCircularPath = (radius, offset) => {
    const keyframes = { x: [], y: [] };
    const steps = 100; // More steps for smoother animation
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * 2 * Math.PI + offset;
      keyframes.x.push(radius * Math.cos(angle));
      keyframes.y.push(radius * Math.sin(angle));
    }
    return keyframes;
  };

  // Positions at top, right, bottom, and left of the circle
  const positions = [
    {
      offset: 0,
      Icon: FaGithub,
      color: "#6e5494",
      href: "https://github.com/jainjatin1234",
    }, // Top
    {
      offset: Math.PI / 2,
      Icon: FaXTwitter,
      color: "black",
      href: "https://x.com/jatinjain184559",
    }, // Right
    {
      offset: Math.PI,
      Icon: FaLinkedin,
      color: "#0000EE",
      href: "https://www.linkedin.com/in/jatin-jain-127b93238/",
    }, // Bottom
    {
      offset: (3 * Math.PI) / 2,
      Icon: SiGmail,
      color: "red",
      href: "mailto:jainjatin748@gmail.com",
    }, // Left
    
  ];

  const handleGit = () => {
    window.location.href = "https://github.com/jainjatin1234";
  };
  const handleLinked = () => {
    window.location.href = "https://www.linkedin.com/in/jatin-jain-127b93238/";
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.6"
      className="min-h-[85vh] md:h-[85vh] md:px-16 px-3 py-5 md:py-12"
    >
      <div className=" md:grid md:grid-cols-2  justify-center items-center">
        <div className="space-y-3">
          <h1 className="text-2xl">Hey, I'm Jatin👋</h1>

          <h1 className="md:text-7xl text-5xl font-extrabold">
            <span className="text-purple-600">Full </span>
            Stack
          </h1>

          <h1 className="md:text-7xl text-5xl font-extrabold">Developer</h1>
          <p className="text-lg text-gray-500">
            I am a full stack developer with a passion for building web
            applications. With expertise in both front-end and back-end
            technologies.
          </p>
        
          <div className="text-center md:text-start">
            <button
              onClick={handleLinked}
              className="bg-black hover:scale-105 duration-300 ease-in-out font-semibold text-white px-3 py-2 rounded-xl mr-4  "
            >
              Get In Touch
            </button>
            <button
              onClick={handleGit}
              className="bg-white border hover:scale-105 duration-300 ease-in-out  font-semibold border-gray-600 text-black px-3 py-2 rounded-xl "
            >
              Browse Projects
            </button>

            

       
          </div>
    


        </div>
        
        <div className="flex my-7 md:my-0  justify-center items-center text0-center">
          <div className="border-2 md:border-none border-purple-500 relative md:w-96 md:h-96 w-72 h-72 rounded-full flex justify-center items-center">
            {positions.map(({ offset, Icon, color, href }, index) => {
              const circularPath = generateCircularPath(circleRadius, offset);
              return (
                <motion.div
                  key={index}
                  animate={{
                    x: circularPath.x,
                    y: circularPath.y,
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 12,
                    ease: "linear",
                  }}
                  className="absolute hidden md:block cursor-pointer"
                  onClick={() => {
                    window.location.href = href;
                  }}
                >
                  <Icon className="text-3xl" style={{ color }} />
                </motion.div>
              );
            })}
            <img
              src="/kk.avif"
              alt="Jatin Image"
              className="rounded-full brightness-110  md:w-72 md:h-72 w-56 h-56 object-cover rotate-[0deg]"
            />
          </div>
        </div>
        <div className="md:hidden  flex justify-evenly text-3xl py-4">
          <FaGithub
            onClick={() => {
              window.location.href = "https://github.com/jatinshakya809";
            }}
            className="text-[#6e5494]"
          />
          <FaInstagram
            onClick={() => {
              window.location.href = "https://www.instagram.com/justjatin.js";
            }}
            className="text-[#e56969]"
          />
          <FaLinkedin
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/jatin-shakya";
            }}
            className="text-[#0000EE]"
          />
          <FaXTwitter
            onClick={() => {
              window.location.href = "https://x.com/JatinShakya809";
            }}
            className=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center rotate-90 m-3 p-2 text-2xl">
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: 10 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className=" duration-75"
        >
          <FaArrowRight />
        </motion.span>
      </div>
    </div>
  );
};

export default Landing;
