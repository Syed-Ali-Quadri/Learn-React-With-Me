import React from "react";
import Card from "./Card";

function Cards({ data, handleRemove }) {
  return (
    <div className="w-full h-72 max-h-72 rounded-md overflow-auto flex flex-wrap items-center gap-4 justify-center">
      {data.length > 0 ? (
        data.map((items, index) => {
          return <Card key={index} id={index} handleRemove={handleRemove} data={items} />;
        })
      ) : (
        <h1 className="opacity-60 font-semibold text-lg">No Data Found</h1>
      )}
    </div>
  );
}

export default Cards;
