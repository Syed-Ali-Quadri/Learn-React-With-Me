import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [users, setUsers] = useState([]); // Use setUsers for consistency

  const getUsers = () => {
    const api = "https://dummyjson.com/users";

    axios
      .get(api)
      .then((response) => {
        const users = response.data.users; // Access the users array directly
        setUsers(users);
        console.log(users);
        
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
        {users.length > 0 ? (
          users.map((item, index) => (
            <div
              key={index}
              className="flex px-2 py-4 w-64 border-2 border-black flex-col rounded-md bg-zinc-200"
            >
              <div className="bg-zinc-100 w-14 mb-4 h-14 overflow-hidden m-auto rounded-full inline-block">
                <img className="w-full h-full" src={item.image} alt="" />
              </div>
              <h1 className="font-semibold text-md text-black text-center mb-2 whitespace-nowrap overflow-hidden">
                {item.firstName}
              </h1>
              <h2 className="font-medium text-xs text-center opacity-60 text-black h-10 overflow-hidden">
                {item.email.replace("x.dummyjson.com", "loopbuild.com")}
              </h2>
              <h3 className="font-medium text-xs opacity-60 text-black mb-1 overflow-hidden">
                <b>University:</b> {item.university}
              </h3>
              <h3 className="font-medium text-xs opacity-60 text-black mb-1 overflow-hidden">
                <b>Phone no:</b> {item.phone}
              </h3>
              <h4 className="font-medium text-xs opacity-60 text-black overflow-hidden">
                <b>Address:</b> {item.address.address}
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
