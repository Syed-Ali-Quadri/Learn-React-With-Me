import React, { useState } from "react";
import axios from "../Utilities/axios";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
   
    axios
      .get("/products")
      .then((data) => {
        const product = data.data;

        setProducts(product);

        product.forEach((elem, index) => {
          // console.group("Product Details " + index);
          // console.log(`Title ${elem.title}`);
          // console.log(`Description ${elem.description}`);
          // console.log(`Price ${elem.price}`);
          // console.groupEnd();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Fetch Product Details</h1>
      <button
        className="px-3 py-2 bg-red-500 text-white font-semibold rounded-full"
        onClick={getProducts}
      >
        Call API
      </button>
      <div className="w-fit border-2 border-black p-3 rounded-lg mt-5 justify-center flex gap-4 flex-wrap">
        {products.length > 0 ? (
          products.map((items, index) => (
            <div
              key={index}
              className="flex px-2 py-4 w-64 border-2 border-black flex-col rounded-md"
            >
              <div className="h-48 w-full rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={items.image}
                />
              </div>
              <h1 className="font-semibold mt-5 text-sm whitespace-nowrap overflow-hidden">
                {items.title}
              </h1>
              <h2 className="font-medium mt-3 text-xs opacity-60 h-10 overflow-hidden">
                {items.description}
              </h2>
              <div className="flex justify-between align-center mt-5">
                <button className="font-medium text-xs font-semibold bg-red-500 text-white w-fit px-5 py-1 rounded-md">
                  ${items.price}
                </button>
                <button className="font-medium text-xs font-semibold bg-green-500 text-white w-fit px-5 py-1 rounded-md h-fit">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
