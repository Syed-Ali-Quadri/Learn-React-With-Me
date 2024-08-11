import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Cart from "./Cart";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routess;
