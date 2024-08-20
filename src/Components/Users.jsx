import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Users = () => {
  const context = useContext(userContext);

  // Ensure context is defined and contains users
  const users = context?.users || [];

  return (
    <div className="h-screen w-full px-8 py-3">
      <div className="text-lg font-medium flex flex-col gap-3 p-3">
        {users.length > 0 ? (
          users.map((item) => (
            <div key={item.id} className="bg-red-300 p-3 rounded-lg flex justify-between">
              <h1>{item.name}</h1>
              <Link to={`/user/${item.id}`}>
                <button className="px-5 py-2 mr-20 bg-green-500 rounded-lg text-black text-xs font-semibold">
                  View More Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Users;
