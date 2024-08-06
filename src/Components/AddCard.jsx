import React from "react";

function AddCard({value, handleAddFriend, friends, index}) {
  const {pfp, name, profession} = value
  const handleClick = () => {
    handleAddFriend(index);
  };
  return (
    <div className="w-52 rounded-md overflow-hidden shrink-0">
      <div className="w-full h-32 bg-sky-200 ">
        <img className="w-full h-full object-cover" src={pfp} alt="" />
      </div>
      <div className="w-full bg-white px-2 py-3">
        <h3 className="text-base font-semibold">{name}</h3>
        <h5 className="text-sm">{profession}</h5>
        <button
          onClick={handleClick}
          className={`mt-3 px-3 py-1 rounded-md text-white ${friends == false ? "bg-blue-600" : "bg-red-600"} text-sm font-semibold`}
        >
          {friends === false ? "Add Friend" : "Remove Friend"}
        </button>
      </div>
    </div>
  );
}

export default AddCard;


//App.jsx code:

// const userData = [
//   {
//     name: "John",
//     profession: "Software Engineer",
//     pfp: "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friend: false
//   },
//   {
//     name: "Emy Smith",
//     profession: "AI Engineer",
//     pfp: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friend: false
//   },
//   {
//     name: "Trever De",
//     profession: "Mechanical Engineer",
//     pfp: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friend: false
//   },
//   {
//     name: "Aditya Roy",
//     profession: "Computer Science Engineer",
//     pfp: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     friend: false
//   }
// ];

// const [data, setData] = useState(userData);

// function handleClick(dets) {
//   setData((prev)=>{
//     return prev.map((item, index) =>{
//       if(index === dets){
//         return {...item, friend: !item.friend}
//       }
//       return item;
//     })
//   })
// };

// return (
//   <>
//     <div className="w-full h-screen bg-zinc-300 flex items-center justify-center gap-3 flex-wrap">
//       {data.map((elem, index) => (
//         <AddCard key={index} index={index} value={elem} friends={elem.friend} handleAddFriend={handleClick} />
//       ))}
//     </div>
//     {/* <Card />   */}
//   </>
// );