import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='mt-10 flex justify-center gap-5'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
    </div>
  )
}

export default NavBar
