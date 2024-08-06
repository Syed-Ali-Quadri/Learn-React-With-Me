import React from "react";

function AddCard({values, handleClick, clickIndex}) {
  const {songName, artistName, addedData} = values

  const clickFunction = ()=>{
    handleClick(clickIndex)
  }

  return (
    <div className="w-72 pb-8 p-3 px-5 rounded-md bg-zinc-100 shrink-0 flex gap-3 relative mt-10">
      <div className="w-20 h-20 bg-sky-200 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hehe" />
      </div>
      <div className="px-2 py-3 leading-none">
        <h3 className="text-xl font-bold">{songName}</h3>
        <h5 className="text-sm font-semibold">{artistName}</h5>
      </div>
        <button
          onClick={clickFunction}
          className={` absolute bottom-0 whitespace-nowrap translate-y-[50%] -translate-x-[50%] left-1/2 px-5 py-3 rounded-full text-white ${addedData === false ? "bg-orange-600" : "bg-teal-600 text-sm px-4 py-2"} text-white text-xs font-semibold`}
        >
          {addedData === false ? "Add To Favourites" : "Added"}
        </button>
    </div>
  );
}

export default AddCard;