import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {

    const [users, setUsers] = useState([
        {
            id: 0,
            name: "John Doe",
            email: "john@doe",
            phone: "123-456-1234",
            address: {
                street: "123 Main St",
                city: "New York",
                zipcode: "10001"
            }
        },
        {
            id: 1,
            name: "Jane Doe",
            email: "jane@doe",
            phone: "567-890-5678",
            address: {
                street: "456 Elm St",
                city: "Los Angeles",
                zipcode: "90001"
            }
        },
        {
            id: 2,
            name: "Michael Doe",
            email: "mike@doe",
            phone: "987-654-3210",
            address: {
                street: "789 Oak St",
                city: "Chicago",
                zipcode: "60601"
            }
        },
        {
            id: 3,
            name: "Sarah Doe",
            email: "sarah@doe",
            phone: "456-789-0987",
            address: {
                street: "234 Pine St",
                city: "Houston",
                zipcode: "77001"
            }
        }
    ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
