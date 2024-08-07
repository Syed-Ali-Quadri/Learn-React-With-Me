import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form"

function Forms() {

  // 3. React Hook form
  const { register, handleSubmit } = useForm()

  return (
    <div className="w-full h-screen p-4 bg-zinc-200 flex items-center justify-center flex-col">
      <h1 className="mb-8 text-4xl">Form Handling</h1>
      <form action="/" 
      onClick={handleSubmit(data => console.log(data))}
      >
        <input
          className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
          type="text"
          name="name"
          placeholder="Name"
          {...register("name")}
        />
        <input
          className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
          type="text"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
          type="email"
          name="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
          type="password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <input
          className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
          type="number"
          name="phonenumber"
          placeholder="Phone Number"
          {...register("phonenumber")}
        />
        <input
          className="bg-zinc-100 px-3 py-1 border-2 border-zinc-400 rounded-md"
          type="submit"
          value="sumbit"
        />
      </form>
    </div>
  );
}

export default Forms;


// 1.useRef:

// const name = useRef(null);
// const username = useRef(null);
// const email = useRef(null);
// const password = useRef(null);
// const phoneNumber = useRef(null);

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name " + name.current.value);
//     console.log("Username " + username.current.value);
//     console.log("Email " + email.current.value);
//     console.log("Password " + password.current.value);
//     console.log("Phone Number " + phoneNumber.current.value);
// };

// return (
// <div className="w-full h-screen p-4 bg-zinc-200 flex items-center justify-center flex-col">
//   <h1 className="mb-8 text-4xl">Form Handling</h1>
//   <form action="/" onSubmit={handleSubmit}>
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="text"
//       name="name"
//       placeholder="Name"
//       ref={name}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="text"
//       name="username"
//       placeholder="Username"
//       ref={username}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="email"
//       name="email"
//       placeholder="Email"
//       ref={email}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="password"
//       name="password"
//       placeholder="Password"
//       ref={password}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="number"
//       name="phonenumber"
//       placeholder="Phone Number"
//       ref={phoneNumber}
//     />
//     <input
//       className="bg-zinc-100 px-3 py-1 border-2 border-zinc-400 rounded-md"
//       type="submit"
//       value="sumbit"
//     />
//   </form>
// </div>
// );


// 2. useState (controlled components):

// const [val, setVal] = useState(
//     {
//         name: '',
//         username: '',
//         email: '',
//         password: '',
//         phonenumber: ''
//     }
// );

// const handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(val);
// }

// return (
// <div className="w-full h-screen p-4 bg-zinc-200 flex items-center justify-center flex-col">
//   <h1 className="mb-8 text-4xl">Form Handling</h1>
//   <form action="/" onSubmit={handleSubmit}>
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="text"
//       name="name"
//       placeholder="Name"
//       onChange={(event) => setVal({...val, name: event.target.value})}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="text"
//       name="username"
//       placeholder="Username"
//       onChange={(event) => setVal({...val, username: event.target.value})}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="email"
//       name="email"
//       placeholder="Email"
//       onChange={(event) => setVal({...val, email: event.target.value})}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="password"
//       name="password"
//       placeholder="Password"
//       onChange={(event) => setVal({...val, password: event.target.value})}
//     />
//     <input
//       className="border-2 block mb-3 w-72 border-zinc-400 rounded-md bg-zinc-100 px-2 py-1 text-sm"
//       type="number"
//       name="phonenumber"
//       placeholder="Phone Number"
//       onChange={(event) => setVal({...val, phonenumber: event.target.value})}
//     />
//     <input
//       className="bg-zinc-100 px-3 py-1 border-2 border-zinc-400 rounded-md"
//       type="submit"
//       value="sumbit"
//     />
//   </form>
// </div>
// );