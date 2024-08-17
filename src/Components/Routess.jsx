import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Cart from "./Cart";
import UserDetails from "./UserDetails";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default Routess;
