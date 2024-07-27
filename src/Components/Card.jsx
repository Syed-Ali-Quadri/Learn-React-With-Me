import React from 'react';

function Card() {
    return (
        <div className='w-full h-screen bg-zinc-200 '>
            <div className='absolute left-1/2 top-1/2 -translate-y-[50%] -translate-x-[50%] rounded-md overflow-hidden'>
                <div className="w-56 h-32 bg-zinc-800">
                    <img className='w-full h-full' src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className=" px-3 py-4 w-56 bg-white">
                    <h1 className='text-xl font-semibold'>Amazon Basics.</h1>
                    <p className='mt-3 font-medium text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minima?</p>
                </div>
            </div>
        </div>
    );
}

export default Card;