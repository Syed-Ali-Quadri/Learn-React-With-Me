import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";

const User = () => {
  let { users } = useContext(UserContext);

  return (
    <div className=" mt-10 w-full h-screen flex items-center justify-start gap-5 flex-col">
      <h1 className="4xl font-semibold">Users</h1>
      {users.map((user, index) => {
        return (
          <Link
            to={`/user/${user.id}`}
            key={index}
            className="flex flex-col gap-4 px-4 py-2 font-semibold text-zinc-100 bg-red-300"
          >
            {user.name}
          </Link>
        );
      })}
    </div>
  );
};

export default User;
