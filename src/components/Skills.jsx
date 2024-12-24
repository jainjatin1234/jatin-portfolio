import React, { useState } from "react";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { SiDaisyui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { PiFileCssLight, PiFileHtmlLight } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { LiaNodeJs } from "react-icons/lia";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import { SiCplusplus } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaAngular } from "react-icons/fa";


const Skills = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);
  const [showDatabases, setShowDatabases] = useState(false);
  const [showTools, setShowTools] = useState(false);

  return (
    <div id="skills" className="md:px-16 px-3 py-5">
      <div className="border-t md:px-32 border-gray-500">
        <div className="flex justify-center items-center gap-3">
          <img src="/skills.png" alt="Skills" className="w-9 h-9 font-bold" />
          <h1 className="text-center text-3xl my-4 font-semibold underline">
            My Skills
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-5 md:px-20   my-2 space-y-5 md:space-y-0">
          <div className="">
            <div
              className="flex cursor-pointer items-center justify-around border-2 border-purple-500 rounded-full shadow-md"
              onClick={() => {
                setShowLanguages(!showLanguages);
              }}
            >
              <img
                src="/programming-language.png"
                alt=""
                className="w-10 h-10"
              />
              <h1 className="font-bold text-2xl">Languages</h1>
              <IoIosArrowDown
                size={30}
                className={`${
                  showLanguages ? "rotate-180" : "rotate-0"
                } duration-500 ease-[0.76, 0, 0.24, 1] transition-all`}
              />
            </div>

            {showLanguages && (
              <div className="px-3">
                <p className="text-gray-500 text-lg">
                  Languages that I have picked up over the years.
                </p>
                <div className="flex justify-between my-8 py-1 border-b-2 border-purple-500">
                  <FaPhp className="text-3xl shadow-md text-[#007396] font-semibold" />
                  <h1 className="font-semibold text-lg">PHP</h1>
                </div>
                <div className="flex justify-between my-8 py-1 border-b-2 border-purple-500">
                  <FaPython className="text-3xl shadow-md text-[#007396] font-semibold" />
                  <h1 className="font-semibold text-lg">Python</h1>
                </div>
                <div className="flex justify-between my-8 border-b-2 border-purple-500">
                  <SiJavascript className="text-2xl shadow-md text-[#F7DF1E]" />
                  <h1 className="font-semibold text-lg">JavaScript</h1>
                </div>
                <div className="flex justify-between my-8 py-1 border-b-2 border-purple-500">
                  <FaJava className="text-3xl shadow-md text-[#007396] font-semibold" />
                  <h1 className="font-semibold text-lg">Java</h1>
                </div>
                <div className="flex justify-between my-8 py-1 border-b-2 border-purple-500">
                  <SiCplusplus className="text-3xl shadow-md text-[#007396] font-semibold" />
                  <h1 className="font-semibold text-lg">C++</h1>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              className="flex cursor-pointer items-center justify-around border-2 border-purple-500 rounded-full p-1  shadow-md "
              onClick={() => setShowFrontend(!showFrontend)}
            >
              <img src="/layer.png" alt="" className="w-8 h-8" />
              <h1 className="font-bold text-2xl ">Frontend</h1>
              <IoIosArrowDown
                size={30}
                className={`${
                  showFrontend ? "rotate-180" : "rotate-0"
                } duration-500 ease-[0.76, 0, 0.24, 1] transition-all`}
              />
            </div>

            {showFrontend && (
              <div className="px-3 space-y-1">
                <p className="text-gray-500 text-lg">
                  My Preferred Frontend Libraries and Frameworks.
                </p>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <PiFileHtmlLight className="text-3xl text-[#E34F26] font-semibold" />
                  <h1 className="font-semibold text-lg">HTML</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <PiFileCssLight className="text-3xl text-[#1572B6] font-semibold" />
                  <h1 className="font-semibold text-lg">CSS</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <RiTailwindCssFill className="text-3xl text-[#0F766E] font-semibold" />
                  <h1 className="font-semibold text-lg">Tailwind CSS</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <FaReact className="text-3xl text-[#61DAFB] font-semibold" />
                  <h1 className="font-semibold text-lg">React.Js</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <TbBrandReactNative className="text-3xl text-[#007ACC] font-semibold" />
                  <h1 className="font-semibold text-lg">
                    React Native (Mobile)
                  </h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <FaAngular className="text-3xl text-[#007ACC] font-semibold" />
                  <h1 className="font-semibold text-lg">
                    Angular
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              onClick={() => {
                setShowBackend(!showBackend);
              }}
              className="flex cursor-pointer items-center justify-around border-2 border-purple-500 rounded-full shadow-md "
            >
              <img src="/web-programming.png" alt="" className="w-10 h-10" />
              <h1 className="font-bold text-2xl ">Backend</h1>
              <IoIosArrowDown
                size={30}
                className={`${
                  showBackend ? "rotate-180" : "rotate-0"
                } duration-500 ease-[0.76, 0, 0.24, 1] transition-all`}
              />
            </div>

            {showBackend && (
              <div className="px-3">
                <p className="text-gray-500 text-md -z-50 ">
                  Languages that I prefer to work with Backend.
                </p>
                <div className="flex justify-between border-b-2 border-purple-500 my-3">
                  <LiaNodeJs className="text-3xl text-[#339933] font-semibold" />
                  <h1 className="font-semibold text-lg">Node</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500 my-3">
                  <SiExpress className="text-2xl text-[#000000] font-semibold" />
                  <h1 className="font-semibold text-lg">Express</h1>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              className="flex cursor-pointer items-center justify-around border-2 border-purple-500 rounded-full p-1 shadow-md"
              onClick={() => setShowDatabases(!showDatabases)}
            >
              <img src="/server-storage.png" alt="" className="w-7 h-7" />
              <h1 className="font-bold text-2xl">Databases</h1>
              <IoIosArrowDown
                size={30}
                className={`${
                  showDatabases ? "rotate-180" : "rotate-0"
                } duration-500 ease-[0.76, 0, 0.24, 1] transition-all`}
              />
            </div>

            {showDatabases && (
              <div className="px-3">
                <p className="text-gray-500 text-lg">
                  Databases that I prefer to work with.
                </p>
                <div className="flex justify-between border-b-2 border-purple-500 my-3">
                  <SiMongodb className="text-3xl text-[#47A248] font-semibold" />
                  <h1 className="font-semibold text-lg">MongoDB</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500 my-3">
                  <SiMysql className="text-3xl text-[#336791] font-semibold" />
                  <h1 className="font-semibold text-lg">MySQL</h1>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              className="flex cursor-pointer px-4 items-center justify-around border-2 border-purple-500 rounded-full p-1 shadow-md"
              onClick={() => setShowTools(!showTools)}
            >
              <img src="/settings.png" alt="" className="w-7 h-7 " />
              <h1 className="font-bold text-2xl  ">Tools and Utilities</h1>
              <IoIosArrowDown
                size={30}
                className={`${
                  showTools ? "rotate-180" : "rotate-0"
                } duration-500 ease-[0.76, 0, 0.24, 1] transition-all`}
              />
            </div>

            {showTools && (
              <div className="px-3 space-y-1">
                <p className="text-gray-500 text-lg">
                  Tools that I have used to work with.
                </p>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <SiPostman className="text-2xl text-[#FF6C37] font-semibold" />
                  <h1 className="font-semibold text-lg">
                    Postman (API testing)
                  </h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <SiGithub className="text-2xl text-[#336791] font-semibold" />
                  <h1 className="font-semibold text-lg">
                    Git-GitHub (Version control)
                  </h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <IoLogoVercel className="text-3xl text-[#000000] font-semibold" />
                  <h1 className="font-semibold text-lg">Vercel (Deployment)</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <TbBrandRedux className="text-3xl text-[#764ABC] font-semibold" />
                  <h1 className="font-semibold text-lg">Redux</h1>
                </div>
                <div className="flex justify-between border-b-2 border-purple-500">
                  <SiRender className="text-3xl text-[#764ABC] font-semibold" />
                  <h1 className="font-semibold text-lg">Render (Backend Deployment)</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
