import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {

  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative w-96 h-52 rounded-lg overflow-hidden flex">
        <img
          className={`shrink-0 absolute transition-transform ease-in-out duration-700 w-full h-full ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover`}
          src="https://images.unsplash.com/photo-1722458660440-4f42938da2e7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 absolute transition-transform ease-in-out duration-700 w-full h-full ${val === false ? "translate-x-[100%]" : "-translate-x-[0%]"} object-cover`}
          src="https://images.unsplash.com/photo-1722433258015-0fa276cb3022?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <span onClick={()=>setVal(!val)} className="absolute w-10 h-10 cursor-pointer left-1/2 bottom-[15%] bg-[#dadada8a] -transform-x-[50%] -transform-y-[50%] flex justify-center items-center rounded-full">
          <FaArrowRightLong size={"1em"} />
        </span>
      </div>
    </div>
  );
}

export default Card;
