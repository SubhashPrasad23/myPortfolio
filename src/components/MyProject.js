import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectList } from "../constant/MockData";

const MyProject = React.forwardRef((props, project) => {

  const [index, setIndex] = useState(-1);
  const hoverHandler = (idx) => {
    setIndex(idx);
  };

  const mouseLeaveHandler = () => {
    setIndex(-1);
  };

  return (
    <>
      <div ref={project}></div>
      <div className="w-full flex items-center justify-center py-6">
        <div className="text-white w-4/5 space-y-5 py-2">
          <h4 className="text-white text-3xl font-semibold tracking-widest text-center">
            MY <span className="text-emerald-400">PROJECTS</span>
          </h4>

          <div className="w-full h-full flex flex-wrap items-center justify-center gap-7 py-9">
            {projectList.length &&
              projectList.map((data, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, z: 100 }}
                  whileInView={{ opacity: 1, z: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <ProjectCard data={data} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default MyProject;
