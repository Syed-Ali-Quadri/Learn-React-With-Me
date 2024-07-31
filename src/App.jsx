import React, { useState } from "react";

function App() {
  const [val, setVal] = useState([
    { name: "Jhon", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 28 }
  ]);

  return (
    <div className="p-5">
      {val.map((items, index) => (
        <>
          <h1 key={index} className="text-xl mb-3">
          {items.name}
        </h1>
        <h1 key={index} className="text-xl mb-3">
          {items.age}
        </h1>
        </>
      ))}
      <button
        onClick={() => setVal(()=>{
          return val.map(item => item.name === 'Jhon' ? ({name: 'Jhon', age: item.age + 1}) : item)
        })}
        className="px-3 py-1 bg-blue-600 text-white"
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
