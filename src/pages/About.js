import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import demo from "../assets/demo.jpg"
const About = React.forwardRef((props, about) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <div className="" ref={about}>
      <div ref={containerRef} className="w-full lg:h-[calc(100vh-10rem)] py-6 flex justify-center items-center">
        <motion.div className="text-white w-4/5 flex flex-col justify-center gap-5" style={{ opacity, scale }}>
          <motion.h3
            className="text-3xl font-semibold tracking-widest text-shadow-custom-emerald text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-400">ABOUT</span> ME
          </motion.h3>

          <div className="w-full flex lg:flex-row flex-col lg:gap-5 gap-10">
            <motion.div
              initial={{ opacity: 0, z: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              className="w-full lg:w-3/5 text-xl leading-relaxed"
            >
              <div className="relative">
                <p>
                  Hi, I'm <span className="text-emerald-400 font-semibold">Subhash Prasad</span>, a passionate frontend
                  developer with a keen eye for design and a love for creating intuitive, dynamic user experiences and a
                  deep understanding of modern web technologies, I strive to build responsive and accessible web
                  applications.
                </p>
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-emerald-500/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <p className="my-4">
                I specialize in <span className="text-emerald-400 font-semibold">React</span> and{" "}
                <span className="text-emerald-400 font-semibold">Tailwind CSS</span>, leveraging their power to develop
                clean, maintainable, and efficient code. Whether I'm working on a personal project or collaborating in a
                team, I always aim to deliver high-quality solutions that meet users' needs.
              </p>

              <p className="">
                Now I am ready to apply my knowledge into practice. Though I do not have any real-life working
                experience, I am eager to learn and contribute effectively to any team. Moving forward in my career, I
                hope to expand my experience across different industries. I am a good learner and a team player. That's
                all about myself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, z: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
              className="border-2 shadow-lg shadow-white lg:w-2/5 h-[350px] w-full flex items-center relative overflow-hidden"
            >
              <motion.div
                style={{
                  y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]),
                }}
                className="w-full h-full"
              >
                <img
                  src={demo}
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
})

export default About

