import React from "react";

function AddCard({value, handleAddFriend, friends, index}) {
  const {pfp, name, profession} = value
  const handleClick = () => {
    handleAddFriend(index);
  };
  return (
    <div className="w-52 rounded-md overflow-hidden shrink-0">
      <div className="w-full h-32 bg-sky-200 ">
        <img className="w-full h-full object-cover" src={pfp} alt="" />
      </div>
      <div className="w-full bg-white px-2 py-3">
        <h3 className="text-base font-semibold">{name}</h3>
        <h5 className="text-sm">{profession}</h5>
        <button
          onClick={handleClick}
          className={`mt-3 px-3 py-1 rounded-md text-white ${friends == false ? "bg-blue-600" : "bg-red-600"} text-sm font-semibold`}
        >
          {friends === false ? "Add Friend" : "Remove Friend"}
        </button>
      </div>
    </div>
  );
}

export default AddCard;