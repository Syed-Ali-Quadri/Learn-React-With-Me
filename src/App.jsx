import React, { useState } from "react";
import Forms from "./Components/Forms";
import Cards from "./Components/Cards";

function App() {
  const [data, setData] = useState([]);

  const handleFormData = (recievedData) => {
    setData([
      ...data,
      {
        name: recievedData.name,
        email: recievedData.email,
        imageURL: recievedData.imageURL
      }
    ]);
  };

  const handleRemoveData = (id) => {
    setData(() => data.filter((item, index) => index != id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 p-8 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-semibold mb-10">User Data</h1>
      <div className="container mx-auto">
        <Cards handleRemove={handleRemoveData} data={data} />
        <h1 className="text-3xl flex justify-center font-semibold mt-10">
          Create User Data
        </h1>
        <Forms submitData={handleFormData} />
      </div>
    </div>
  );
}

export default App;