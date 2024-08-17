import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setFirst] = useState("This is Normal Data");
  const [second, setSecond] = useState("This is Large Data");

  useEffect(() => {

    console.log("Services component is available now!!");

    return () => {
      console.log("Services component is unavailable...");
    };
    
  }, [second]);

  const firstClick = () => {

    setFirst("Loading Data...");
    console.log("Data is changing soon...");

    setTimeout(() => {
      setFirst("This is Normal Data Changed...");
      console.warn("Normal Data Changed...");
    }, 1000);

  };
  const secondClick = () => {

    setSecond("Loading Data...");
    console.log("Data is changing soon...");

    setTimeout(() => {
      setSecond("This is Large Data Changed...");
      console.warn("Large Data Changed...");
    }, 1000);

  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="flex justify-start gap-10 mt-5">
        <div className="first border-2 border-black p-4 rounded-md">
          <h1 className="text-md font-semibold text-center">{first}</h1>
          <button
            onClick={firstClick}
            className="mt-4 px-4 py-1 bg-red-500 text-white rounded-full font-semibold text-xs border-2 border-black"
          >
            Click Here to Change Normal Data
          </button>
        </div>
        <div className="second border-2 border-black p-4 rounded-md">
          <h1 className="text-md font-semibold text-center">{second}</h1>
          <button
            onClick={secondClick}
            className="mt-4 px-4 py-1 bg-green-500 rounded-full font-semibold text-xs border-2 border-black"
          >
            Click Here to Change Large Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
