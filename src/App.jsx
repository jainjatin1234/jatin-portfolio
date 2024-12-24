import React from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import LocomotiveScroll from "locomotive-scroll";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Experience from "./components/Experience";

const App = () => {
  AOS.init();
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Education />
      <Skills />
      <Experience/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
