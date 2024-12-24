import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const email = "jainjatin748@gmail.com"; // Replace with your email
  return (
    <div id="contact" className="md:px-16 px-3 min-h-[60vh]">
      <div className="border-t text-center border-gray-400">
        <div className="my-5">
          <h1 className="text-3xl  underline font-bold">Contact Me</h1>
          <p className="text-gray-500">
            Want to connect? My inbox is always open!
          </p>
        </div>
      </div>

      <div className="md:grid grid-cols-2  md:px-20">
        <div className="md:flex justify-center items-center">
          <div className="space-y-8 p-4 md:p-0">
            <div
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <CgMail className="text-4xl text-blue-500" />
              <div>
                <h1 className="font-bold text-lg">Email</h1>
                <p className="text-gray-500 font-semibold">
                  jainjatin748@gmail.com
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                window.location.href = "https://x.com/jatinjain184559";
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <FaXTwitter className="text-4xl" />
              <div>
                <h1 className="font-bold text-lg">Twitter</h1>
                <p className="text-gray-500 font-semibold">@jatinjain184559</p>
              </div>
            </div>
            <div
              onClick={() => {
                window.location.href = "https://github.com/jainjatin1234";
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <FaGithub className="text-4xl  text-black-500" />
              <div>
                <h1 className="font-bold text-lg">Github</h1>
                <p className="text-gray-500 font-semibold">@justjatin.js</p>
              </div>
            </div>
            <div
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/jatin-jain-127b93238/";
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <FaLinkedin className="text-4xl  text-blue-700" />
              <div>
                <h1 className="font-bold text-lg">Linkedin</h1>
                <p className="text-gray-500 font-semibold">Jatin Jain</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-5 py-5 px-2">
          <form>
            <div className="flex flex-col gap-4">
              <div className="md:flex space-y-4 md:space-y-0 gap-2 w-full">
                <div className="border-2 border-purple-600  overflow-hidden md:overflow-visible p-3 rounded-xl">
                  <h1 className="font-semibold">Name</h1>
                  <input
                    type="text"
                    name="name" // Add this
                    className="border-none bg-[#f8f8ff] outline-none"
                    required // Add required attribute if needed
                  />
                </div>
                <div className="w-full border-2 overflow-hidden  border-purple-600 p-3 rounded-xl">
                  <h1 className="font-semibold">Email</h1>
                  <input
                    type="email"
                    name="email" // Add this
                    className=" bg-[#f8f8ff] border-none outline-none"
                    required // Add required attribute if needed
                  />
                </div>
              </div>

              <div className="w-full border-2 border-purple-600 rounded-xl p-3">
                <h1 className="font-semibold">Subject</h1>
                <input
                  type="text"
                  name="subject" // Add this
                  className="border-none bg-[#f8f8ff] outline-none w-full text-black"
                  required // Add required attribute if needed
                />
              </div>

              <div className="w-full border-2 border-purple-600 rounded-xl p-3">
                <h1 className="font-semibold">Message</h1>
                <textarea
                  name="message" // Add this
                  rows={6}
                  className="border-none w-full bg-[#f8f8ff] outline-none text-black"
                  required // Add required attribute if needed
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  "Current form is not in working because i dont want to write a backend😅😅 but you can contact me on Linkedin"
                );
              }}
              className="px-4 py-2 rounded-lg my-3 text-white text-xl bg-purple-500"
            >
              Send Message <LuSendHorizonal className="inline" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
