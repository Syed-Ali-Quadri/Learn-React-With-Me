import React from "react";

function Card() {
  let data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minima?"
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663946069675-1e5cd710e4b4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple Tower",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minima?"
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1677422889741-0e01bf6d92cd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Miscrosoft device",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minima?"
    },
    {
      image:
        "https://images.unsplash.com/photo-1597961509090-45101abfa9cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Object",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minima?"
    }
  ];

  return (
    <div className="w-full flex items-center justify-center gap-10 flex-wrap h-screen bg-zinc-200 ">
      {data.map((elem, index) => (
        <div key={index} className="rounded-md overflow-hidden">
          <div className="w-56 h-32 bg-zinc-800">
            <img className="w-full h-full" src={elem.image} alt="" />
          </div>
          <div className=" px-3 py-4 w-56 bg-white">
            <h1 className="text-xl font-semibold">{elem.name}</h1>
            <p className="mt-3 font-medium text-xs">{elem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
