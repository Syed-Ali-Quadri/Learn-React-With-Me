import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='bg-zinc-300 w-full p-4 px-10 flex gap-10 justify-left'>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/userDetails">Users</Link>
    </div>
  )
}

export default NavBar
