import React from "react";
import demo from "../assets/demo.jpg";
import { motion } from "framer-motion";

const About = React.forwardRef((props, about) => {
  return (
    <div className="" ref={about}>
      <div className="w-full lg:h-[calc(100vh-10rem)] py-6 flex justify-center items-center ">
        <div className="text-white  w-4/5    flex flex-col justify-center  gap-5 ">
          <h3 className="text-3xl font-semibold tracking-widest text-shadow-custom-emerald  text-center">
            <span className="text-emerald-400">ABOUT</span> ME
          </h3>
          <div className="w-full flex lg:flex-row flex-col lg:gap-5 gap-10 ">
            <motion.div
              initial={{ opacity: 0, z: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              className="w-full lg:w-3/5 text-xl leading-relaxed "
            >
              <p>
                Hi, I'm Subhash Prasad, a passionate frontend developer with a
                keen eye for design and a love for creating intuitive, dynamic
                user experiences and a deep understanding of modern web
                technologies, I strive to build responsive and accessible web
                applications.
              </p>
              <p className="my-4">
                I specialize in React and Tailwind CSS, leveraging their power
                to develop clean, maintainable, and efficient code. Whether I'm
                working on a personal project or collaborating in a team, I
                always aim to deliver high-quality solutions that meet users'
                needs.
              </p>
              <p className="">
                Now I am ready to apply my knowledge into practice. Though I do
                not have any real-life working experience, I am eager to learn
                and contribute effectively to any team. Moving forward in my
                career, I hope to expand my experience across different
                industries. I am a good learner and a team player. That's all
                about myself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, z: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              className="   border-2 shadow-lg shadow-white lg:w-2/5 h-[350px] w-full flex items-center "
            >
              <img src={demo} alt="" className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
