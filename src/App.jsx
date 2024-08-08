import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact.jsx";
import Users from "./Components/Users.jsx";
import Userdetail from "./Components/Userdetail.jsx";

function App() {
  return (
    <>
      <nav className=" m-3 flex gap-4">
        <NavLink
          style={(dets) => {
            return {
              color: dets.isActive ? "Red" : ""
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(dets) => {
            return {
              color: dets.isActive ? "Red" : ""
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={(dets) => {
            return {
              color: dets.isActive ? "Red" : ""
            };
          }}
          to="/contact"
        >
          Contact Us
        </NavLink>
        <NavLink
          style={(dets) => {
            return {
              color: dets.isActive ? "Red" : ""
            };
          }}
          to="/users"
        >
          Users
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />}>
          <Route path="/users/:name" element={<Userdetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
