import React from "react";

function Tilted() {
  //    const  handlleMouseMove =(e)=>{
  //     const rect = e.target.getBoundingClientRect();
  // console.log(e.target.getBoundingClientRect())
  //     const width = rect.width;
  //     const height = rect.height;
  //     }
  return (
    // <div className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300" onMouseMove={handlleMouseMove}>
    //   <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
    //     <p
    //       style={{
    //         transform: "translateZ(50px)",
    //       }}
    //       className="text-center text-2xl font-bold"
    //     >
    //       HOVER ME
    //     </p>
    //   </div>
    // </div>
    <>
      <button class=" relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
        <span relative="">Shine</span>
      </button>

      <button class="relative h-[50px] w-40  border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
        <span class="relative z-10">Swipe</span>
      </button>
      
     
    </>
  );
}

export default Tilted;
