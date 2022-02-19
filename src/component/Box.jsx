import React from "react";

const Box = ({ title, isComplete }) => {
  return (
    <div
      className={`w-60 h-20 flex justify-center items-center mb-10 mx-2 rounded-md 
        shadow-xl text-center transform hover:scale-110 transition duration 300 
        ${isComplete ? "bg-green-300" : "bg-red-300"}`}
    >
      {title}
    </div>
  );
};

export default Box;
