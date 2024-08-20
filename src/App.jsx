import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import User from "./Components/User";

function App() {
  return (
    <>
      {/* Navigation Bar with Route Management. */}
      <div className="p-5 px-10 bg-zinc-300 flex gap-10 justify-between">
        <h1 className="text-xl font-semibold font-mono tracking-tighter">
          React App
        </h1>
        <div className="mx-auto flex gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>

      {/* Route Management. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
