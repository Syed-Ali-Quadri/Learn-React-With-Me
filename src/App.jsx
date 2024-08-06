import React, { useState } from "react";
import Card from "./Components/Card";
import Buttons from "./Components/Buttons";
import AddCard from "./Components/AddCard";
import MusicCard from "./Components/MusicCard";
import Navbar from "./Components/NavBar";

function App() {
  const rawSongData = [
    {
      songName: "Uska hi bana",
      artistName: "Arijit Singh",
      addedData: false
    },
    {
      songName: "Thoda Thoda Pyaar",
      artistName: "Stebin Ben",
      addedData: false
    },
    {
      songName: "Humnava Mere",
      artistName: "Jubin Natiyal",
      addedData: false
    },
    {
      songName: "Shayad",
      artistName: "Arijit Singh",
      addedData: false
    },
    {
      songName: "Likhe Jo Kat Mujhe",
      artistName: "Mohammed Rafi",
      addedData: false
    },
    {
      songName: "Musafir",
      artistName: "Atif Aslam",
      addedData: false
    }
  ];

  const [songData, setSongData] = useState(rawSongData);

  const onClickFunction = (index) =>{
    setSongData((prev) =>{
      return prev.map((items, stateIndex) =>{
        if(index === stateIndex){
          return {...items, addedData: !items.addedData}
        }
        return items;
      })
    })
  };

  return (
    <>
      <div className="w-full h-screen">
        <Navbar data={songData} />
        <div className="flex mt-10 px-20 gap-10 flex-wrap justify-center">
          {songData.map((item, index) => {
            return <MusicCard key={index} clickIndex={index} values={item} handleClick={onClickFunction} />; // add key prop here for unique identification in react array list
          })}
        </div>
      </div>
    </>
  );
}

export default App;
