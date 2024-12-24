import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.9"
      className="h-[50vh] hidden md:flex   overflow-hidden flex-col justify-center text-center items-center"
    >
      <div className="w-[120%] shadow-xl  items-center justify-center  hidden md:block rotate-[8deg]  bg-purple-600 py-1">
        <div className="text-white flex gap-1 overflow-hidden uppercase whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className="text-2xl font-bold "
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
              repeatType: "loop",
            }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
        </div>
      </div>
      <div className="w-[120%]  items-center justify-center  hidden md:block -rotate-[9deg] shadow-xl bg-purple-500 py-1">
        <div className="text-white flex gap-1 overflow-hidden uppercase whitespace-nowrap">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className="text-2xl font-bold "
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
              repeatType: "loop",
            }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-2xl  font-bold"
          >
            Web Developer || Frontend || Backend || Database ||
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
