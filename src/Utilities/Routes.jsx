import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import User from '../Components/User';
import UserDetails from '../Components/UserDetails';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default RoutesComponent;