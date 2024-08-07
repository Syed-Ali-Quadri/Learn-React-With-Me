import React from "react";

function Card({ data, handleRemove, id }) {
  return (
    <>
      <div className="w-52 h-fit bg-white rounded-lg flex flex-col items-center">
        <div className="image w-16 h-16 bg-zinc-100 rounded-full mt-2 overflow-hidden">
          <img className="w-full h-full object-cover" src={data.imageURL} />
        </div>
        <h1 className="text-xl text-center leading-none font-semibold mt-1">{data.name}</h1>
        <h4 className="opacity-70 text-xs mt-1">{data.email}</h4>
        <p className=" p-1 text-xs font-medium mt-1 text-center leading-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut labore
          laborum quisquam.
        </p>
        <button
          onClick={() => handleRemove(id)}
          className="mt-4 mb-3 px-3 py-1 bg-red-600 text-xs text-bold text-white rounded-md"
        >
          Remove It
        </button>
      </div>
    </>
  );
}

export default Card;
