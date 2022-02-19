import React from "react";

const Box = ({ title, complete }) => {
  return (
    <div
      className={`w-60 h-20 flex justify-center items-center mb-10 mx-2 rounded-md 
        shadow-xl text-center transform hover:scale-110 transition duration 300 
        ${complete ? "bg-green-300" : "bg-red-300"}`}
    >
      {title}
    </div>
  );
};

export default Box;
