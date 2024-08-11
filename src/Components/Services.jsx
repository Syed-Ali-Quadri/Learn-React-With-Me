import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("Services component is available now!!");
    return () => {
      console.log("Services component is unavailable...");
    };
  });

  return (
    <div className="p-5">
      <h1>Services</h1>
    </div>
  );
};

export default Services;
