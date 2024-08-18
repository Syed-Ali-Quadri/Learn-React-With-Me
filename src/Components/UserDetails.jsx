import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();

  const { users } = useContext(UserContext);
  const user = users[id];

  const navigate = useNavigate();

  const clickEvent = () =>{
    navigate("/user");
  }
  
  return (
    <div className="w-full h-screen flex items-center justify-center gap-1 flex-col">
      <h1 className="text-4xl font-semibold mb-10">User Details: </h1>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Name: {user.name}</h2>
        <h2 className="text-sm font-semibold">Email: {user.email}</h2>
        <h2 className="text-sm font-semibold">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</h2>
        <h2 className="text-sm font-semibold">Phone: {user.phone}</h2>
        <button onClick={clickEvent} className='mt-10 bg-red-500 rounded-md px-5 py-2 text-white font-semibold'>Go back</button>
      </div>
      
    </div>
  )
}

export default UserDetails
