import axios from "../Utilities/axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [Users, setUsers] = useState([]); // Use setUsers for consistency

  const getUsers = () => {
  
    axios
      .get("/users")
      .then((response) => {
        const fetchedUsers = response.data; // Access the users array directly
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Fetch User Details</h1>
      <div className="w-fit border-2 border-black p-3 rounded-lg mt-5 justify-center flex gap-4 flex-wrap">
        {Users.length > 0 ? (
          Users.map((item, index) => (
            <div
              key={index}
              className="flex px-2 py-4 w-64 border-2 border-black flex-col rounded-md bg-zinc-200"
            >
              <div className="bg-zinc-100 w-14 mb-4 h-14 overflow-hidden m-auto rounded-full inline-block">
                <img className="w-full h-full" src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg=" alt="" />
              </div>
              <h1 className="font-semibold text-md text-black text-center mb-2 whitespace-nowrap overflow-hidden">
                {item.name.firstname.charAt(0).toUpperCase() + item.name.firstname.slice(1)}
              </h1>
              <h2 className="font-medium text-xs text-center opacity-60 text-black h-10 overflow-hidden">
                {item.email.replace("x.dummyjson.com", "loopbuild.com")}
              </h2>
              <h3 className="font-medium text-xs opacity-60 text-black mb-1 overflow-hidden">
                <b>Username:</b> {item.username}
              </h3>
              <h3 className="font-medium text-xs opacity-60 text-black mb-1 overflow-hidden">
                <b>Phone no:</b> {item.phone}
              </h3>
              <h4 className="font-medium text-xs opacity-60 text-black overflow-hidden">
                <b>Address:</b> {item.address.street}
              </h4>
            </div>
          ))
        ) : (
          <h1 className="text-lg font-bold text-black">No Users Found</h1>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
