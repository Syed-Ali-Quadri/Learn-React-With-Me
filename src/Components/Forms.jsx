import React from "react";
import { useForm } from "react-hook-form";

function Forms({ submitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormSubmit = (data) => {
    submitData(data);
    reset();
  };

  return (
    <div className="w-full flex items-center justify-center mt-10">
      <form className="flex gap-8" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name")}
          className="px-2 py-1 font-semibold text-base outline-none rounded-md"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="px-2 py-1 font-semibold text-base outline-none rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("imageURL")}
          className="px-2 py-1 font-semibold text-base outline-none rounded-md"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="px-5 py-1 bg-blue-500 font-semibold text-white text-sm rounded-md"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Forms;
