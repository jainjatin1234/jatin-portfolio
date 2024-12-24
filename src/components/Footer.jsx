import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-center text-white bg-purple-400">
      <div className="container pt-9">
        <div className="mb-9 flex justify-center gap-5 text-2xl text-white">
          <FaInstagram className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className=" p-4 text-center  bg-purple-600">
        © 2024 Copyright:
        <a className="text-white font-bold " href="https://tw-elements.com/">
          {" "}
          Jatin Jain
        </a>
      </div>
    </footer>
  );
};

export default Footer;
