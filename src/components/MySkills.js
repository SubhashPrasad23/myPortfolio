import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import toolkit from "../assets/toolkit.png";
import zustand from "../assets/zustand.jpg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const MySkills = React.forwardRef((props, skill) => {
  const [index, setIndex] = useState(-1);
  const skills = [
    { skill: "HTML", img: html },
    { skill: "CSS", img: css },
    { skill: "Javascript", img: js },
    { skill: "Tailwind CSS", img: tailwind },
    { skill: "React", img: react },
    { skill: "Redux Toolkit", img: toolkit },
    { skill: "Zustand", img: zustand },
  ];

  const hoverHandler = (idx) => {
    setIndex(idx);
  };

  const mouseLeaveHandler = () => {
    setIndex(-1);
  };

  return (
    <>
      <div ref={skill}></div>
      <div className="w-full flex items-center justify-center py-6">
        <div className="text-white w-4/5 space-y-5 py-2">
          <h4 className="text-white text-3xl font-semibold tracking-widest text-center">
            MY <span className="text-emerald-400">SKILLS</span>
          </h4>

          <div className="w-full h-full flex flex-wrap items-center justify-center md:gap-12 gap-7 py-7">
            {skills.map((data, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, z: 100 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`lg:w-56 w-full flex lg:flex-col items-center justify-center lg:px-7 lg:py-3 py-2   rounded-lg ${
                  index === idx
                    ? "text-red-900 shadow-md shadow-emerald-300"
                    : "text-gray-900"
                } ${idx % 2 === 0 ? "bg-emerald-200" : "bg-white"}`}
                onMouseEnter={() => hoverHandler(idx)}
                onMouseLeave={mouseLeaveHandler}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                <div className="flex flex-col items-center lg:gap-3">
                  <img
                    src={data.img}
                    className="h-14 w-14 object-cover"
                    alt={data.skill}
                  />
                  <span className="text-xl">{data.skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="fixed bottom-8 right-3 space-y-5">
          <div className="bg-emerald-500 p-1.5 rounded-full text-white hover:bg-white hover:text-black">
            <a href="https://github.com/SubhashPrasad23" target="_blank">
              <FaGithub size={25} />
            </a>
          </div>
          <div className="bg-emerald-500 p-1.5 rounded-full text-white hover:bg-white hover:text-black">
            <a
              href="https://www.linkedin.com/in/subhash-prasad-3b9a13236/"
              target="_blank"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
          <div className="bg-emerald-500 p-1.5 rounded-full text-white hover:bg-white hover:text-black">
            <a
              href="https://www.instagram.com/subhash_prasad23/?igsh=a2k2MzdybWJ1ZTRl"
              target="_blank"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

export default MySkills;
