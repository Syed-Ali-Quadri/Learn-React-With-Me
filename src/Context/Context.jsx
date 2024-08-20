import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext(null);

const Context = (props) => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const fetchData = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(fetchData.data); // Set the data correctly
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers(); // Fetch users when the component mounts
  }, []);

  return (
    <userContext.Provider value={{ users, getUsers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
