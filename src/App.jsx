import React, { useState } from "react";
import Card from "./Components/Card";
import Buttons from "./Components/Buttons";
import AddCard from "./Components/AddCard";

function App() {
  const userData = [
    {
      name: "John",
      profession: "Software Engineer",
      pfp: "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false
    },
    {
      name: "Emy Smith",
      profession: "AI Engineer",
      pfp: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false
    },
    {
      name: "Trever De",
      profession: "Mechanical Engineer",
      pfp: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false
    },
    {
      name: "Aditya Roy",
      profession: "Computer Science Engineer",
      pfp: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false
    }
  ];

  const [data, setData] = useState(userData);

  function handleClick(dets) {
    setData((prev)=>{
      return prev.map((item, index) =>{
        if(index === dets){
          return {...item, friend: !item.friend}
        }
        return item;
      })
    })
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex items-center justify-center gap-3 flex-wrap">
        {data.map((elem, index) => (
          <AddCard key={index} index={index} value={elem} friends={elem.friend} handleAddFriend={handleClick} />
        ))}
      </div>
      {/* <Card />   */}
    </>
  );
}

export default App;
