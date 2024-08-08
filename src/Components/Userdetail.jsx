import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Userdetail() {
    const { name } = useParams();
    const navigate = useNavigate();

    const handleclick = () => {
        navigate(-1);
    };

  return (
    <div className='p-3'>
      <h1 className='text-3xl font-semibold mb-5'>User details</h1>
      <h4>Hey, <span className='font-semibold tracking-tight'>{name}</span>👋🏻</h4>
      <button onClick={handleclick} className='text-white bg-red-500 px-3 py-1 rounded-md mt-4'>Go back</button>
    </div>
  )
}

export default Userdetail
