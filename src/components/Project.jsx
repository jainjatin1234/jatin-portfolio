import React, { useState } from "react";
import { SiPolymerproject } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    img: "/dustypages.jpg",
    title: "The Dusty Pages",
    description:
      " Developed a full-stack Bookstore app using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include a responsive UI for browsing and filtering books, a RESTful API for user accounts, inventory management, and order processing. MongoDB handles data storage.",
    techStack: "React, Node, MongoDB, Express, Tailwind, Javascript.",
    visitLink: "https://bookstorebookstore.netlify.app//",
    sourceLink: "https://github.com/jainjatin1234/bookstore",
  },
  {
    img: "/Screenshot (40).png",
    title: "Learn Sphere",
    description:
      " LearnSphere is a MERN stack web app for learning resources, featuring a React front-end for content and profile management. The Node.js and Express.js back-end offers a RESTful API, with MongoDB storing data and JWT authentication for security.",
    techStack:
      "React, Node, MongoDB, Express, Tailwind, Cloudinary, Javascript, Socket.Io.",
    visitLink: "https://learn-sphere-learnsphere.netlify.app/",
    sourceLink: "https://github.com/jainjatin1234/Edu-sphere",
  },
  {
    img: "/taskharbor.jpg",
    title: "Task Harbor",
    description:
      " Created a task management app with React.js, Node.js, Express.js, and MongoDB. Features include JWTauthentication,real-time CRUD operations, RESTful APIs, and a responsive UI with efficient state management",
    techStack: "React, Node, MongoDB, Express, Tailwind, Javascript.",
    visitLink: "https://taskharbourbour.netlify.app/",
    sourceLink:
      "https://github.com/jainjatin1234/Taskharbourfrontend",
  },
  {
  img: "/Screenshot (42).png",
    title: "Blog Website",
    description:
      "  Developed a dynamic blog website with a user-friendly interface using HTML, CSS, Bootstrap, and JavaScript.Implemented a secure backend with Node.js, Express.js, and MongoDB. Key features include Signup/Login, blog creation, editing, and display, enabling seamless user-generated content management",
    techStack: "React JS, HTML, CSS, Bootstrap.",
    visitLink: "https://blogger-hl48.onrender.com",
    sourceLink:
      "https://github.com/jainjatin1234/blog-project",
  },
  {
    img: "/Screenshot (41).png",
    title: "Tripy Website",
    description:
      "  Built a fully responsive website using React.js, HTML, CSS, and Bootstrap for a visually appealing design. Features include a gallery of popular tourist destinations in India, providing users with engaging and informative content across all devices.",
    techStack: " Node.js, Express.js, MongoDB, HTML, CSS, Bootsrap",
    visitLink: "https://tripywebsite.netlify.app/",
    sourceLink:
      "https://github.com/jainjatin1234/website",
  },
  {
    img: "/Screenshot (39).webp",
    title: "Ecommerce Application",
    description:
      "   Developed a full-stack e-commerce website using React.js, Node.js, and Stripe API for payment integration Features include secure Login/Signup, user authentication, order placement, and seamless API integration for data exchange. Designed for scalability and modular integration, mimicking platforms like Flipkar.",
    techStack: " React.js, Node.js, Express.js, MongoDB, Redux, HTML, CSS .",
    visitLink: "https://github.com/jainjatin1234/Ecommerce-app",
    sourceLink:
      "https://github.com/jainjatin1234/Ecommerce-app",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="projects" className="min-h-[50vh] md:px-16 px-1 my-10">
      <div id="project"  className="border-t border-gray-500"></div>
      <div id="project" className="flex justify-center items-center gap-2 my-3">
        <SiPolymerproject className="w-9 h-9" />
        <h1 className="text-3xl underline font-bold">Projects</h1>
      </div>
      <p className="my-5 px-2 text-lg text-purple-500">
        My recent Projects{" "}
        <a
          href="https://github.com/jainjatin1234"
          className="underline text-red-600"
        >
          More
        </a>
      </p>
      <div id="project" className="flex justify-center items-center md:gap-8">
        <button
          className="text-black text-4xl rounded-full"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>

        <div className="md:w-[65%] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full md:flex  md:border-none border rounded-xl justify-center gap-5 items-center p-3 md:h-[] md:w-[250px] w-full max-h-[70vh] "
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl md:w-full md:h-1/2 w-full object-cover shadow-lg"
                />
                <div className="py-1 space-y-1">
                  <h1 className="font-semibold text-lg">{project.title}</h1>
                  <p className="text-black-100 leading-5">
                    {project.description}
                  </p>
                  <h1>
                    <span className="text-purple-800 font-semibold">
                      Tech Stack:
                    </span>{" "}
                    <span>{project.techStack}</span>
                  </h1>
                  <div className="pt-2">
                    <a
                      href={project.visitLink}
                      className="px-2 py-1 bg-purple-600 text-white rounded-xl mr-3"
                    >
                      Visit Project
                    </a>
                    <a
                      href={project.sourceLink}
                      className="px-2 py-1 bg-purple-600 text-white rounded-xl"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className=" text-black text-4xl rounded-full"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
