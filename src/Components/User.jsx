import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../Context/Context';

const User = () => {
  const { id } = useParams();
  const { users } = useContext(userContext); // Access the context properly
  const navigate = useNavigate(); // Initialize the navigate function

  // Find the user with the given id
  const user = users?.find(user => user.id === +id);

  const clickEvent = () => {
    navigate("/users"); // Navigate to /users route
  };

  return (
    <>
      <button 
        onClick={clickEvent} 
        className='ml-1 mt-2 text-red-500 cursor-pointer font-semibold hover:text-red-600'
      >
        Back to Users
      </button>
      <div className="py-5 px-2 flex flex-col">
        {user ? (
          <>
            <h1 className='text-3xl font-semibold text-blue-300 tracking-tighter'>{user.name},</h1>
            <h3 className='text-sm opacity-50'>@{user.username}</h3>  
            <h2 className='text-md font-medium'>{user.email}</h2> 
            <h2 className='text-md font-medium'>{user.website}</h2> 
            <h2 className='text-md font-medium'>{user.phone}</h2> 
          </>
        ) : (
          <h1>User not found</h1> // Display message if user is not found
        )}
      </div> 
    </>
  );
};

export default User;
