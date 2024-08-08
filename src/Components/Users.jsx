import React from 'react'
import { Link, Outlet } from "react-router-dom";


function Users() {
  return (
    <div className='w-1/2 flex flex-col px-3 py-1'>
        <h1 className='text-2xl font-semibold mb-3'>Users List</h1>
      <Link to="/users/John" className='bg-red-200 w-1/3 px-3 py-1 text-xl font-medium hover:bg-red-300 mb-2'>John</Link>
      <Link to="/users/Peter" className='bg-red-200 w-1/3 px-3 py-1 text-xl font-medium hover:bg-red-300 mb-2'>Peter</Link>
      <Link to="/users/William" className='bg-red-200 w-1/3 px-3 py-1 text-xl font-medium hover:bg-red-300 mb-2'>William</Link>
      <Link to="/users/Maddy" className='bg-red-200 w-1/3 px-3 py-1 text-xl font-medium hover:bg-red-300 mb-2'>Maddy</Link>
        <br />
      <div className="w-full h-96 bg-sky-400">
        <Outlet />
      </div>
    </div>
  )
}

export default Users
