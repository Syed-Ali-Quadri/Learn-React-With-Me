import React, { useState } from 'react'

function App() {

    const [val, setVal] = useState({
        name: 'Jhon Doe',
        isBanned: false,
        score: 5
    });

  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-200'>
        <div className="p-5 rounded-xl border-2 border-rose-500 bg-zinc-300">
      <h1 className='text-3xl mb-3'>Name: <b>{val.name}</b></h1>
      <h2 className='text-2xl mb-3'>Score: <b>{val.score}</b></h2>
      <h2 className='text-xl mb-3'>Banned: <b>{val.isBanned.toString()}</b></h2>
      <button onClick={()=> setVal({...val, score: val.score + 1})} className='mr-3 px-3 py-1 bg-blue-600 rounded-md text-sm text-white'>Set Score!</button>
      <button onClick={()=> setVal({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-red-600 rounded-md text-sm text-white'>Ban Me!</button>
        </div>
    </div>
  )
}

export default App
