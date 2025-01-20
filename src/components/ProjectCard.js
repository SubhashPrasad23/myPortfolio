import React from "react";
import demo from "../assets/demo.jpg";

const ProjectCard = ({ data }) => {
  return (
    <div className="w-72  h-[550px] hover:scale-105 hover:shadow-md hover:shadow-emerald-300 transition-all duration-500 rounded-lg">
      <img src={data.img} alt="project_Img" className="rounded-t-lg w-full h-2/6" />
      <div className="h-4/6 p-4 flex flex-col justify-between ">
        <div>
          <h4 className="text-lg font-semibold tracking-wider">{data.name}</h4>
          <p className="py-1 text-gray-400 leading-tight text-md">
            {data.description}
          </p>
          <div className="py-1">
            <h6 className="text-red-600 text-lg font-semibold tracking-wider">
              Tech Stack
            </h6>
            <span>{data?.tech?.join(", ")}</span>
          </div>
        </div>

        <div className="flex justify-evenly py-1.5">
          <a href={data?.demo} target="_blank">
            <button className="bg-emerald-500 hover:bg-emerald-400 rounded-md transition-all duration-150 text-white tracking-wide px-4 py-1 shadow-inner shadow-emerald-300">
              Live
            </button>
          </a>

          <a href={data?.github}>
            <button className="bg-emerald-500 hover:bg-emerald-400 rounded-md transition-all duration-150 px-4 py-1 text-white shadow-inner shadow-emerald-300">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
