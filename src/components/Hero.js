import React from "react";
import myPic from "../assets/mypic.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import cv from "../assets/subhash_resume.pdf";
import { motion } from "framer-motion";

const Hero = React.forwardRef((props, home) => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Frontend Developer", "Frontend Developer"],
    loop: {},
    delaySpeed: 7000,
  });

  return (
    <motion.div
 
      className="flex justify-center items-center h-[calc(100vh-4rem)]  mt-20 overflow-hidden  " ref={home}
    >
      <div className="overflow-auto text-white  w-4/5    lg:flex lg:flex-row items-center justify-center  gap-5 space-y-6 ">
        <div className="w-full lg:w-1/2   flex items-center justify-center p-4" >
          <div className="frontend_img w-80 h-80   overflow-hidden shadow-lg shadow-gray-400 ">
            <img src={myPic} alt="img" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-2 text-center lg:text-start ">
          <h3 className="lg:text-7xl text-6xl font-extrabold ">I'm a</h3>
          <h4 className="lg:text-5xl text-4xl font-extrabold text-emerald-600">
            {text} <Cursor />
          </h4>
       
          <div className="space-x-3 pt-6">
            <button className="relative overflow-hidden px-5 py-2 rounded-lg  bg-emerald-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-400 before:rounded-lg before:transition-all before:duration-500 hover:text-white hover:shadow-green-400 hover:before:left-0 hover:before:w-full">
              <span className="relative text-white font-semibold">
                <a href={cv} download="Resume.pdf">
                  Download CV
                </a>
              </span>
            </button>
         
          </div>
        </div>
      </div>
    </motion.div>
  );
})

export default Hero;
