import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
    <div className="w-full h-10 bg-red-500 ">
     <button className="bg-blue-400 w-48 rounded-full mx-5">
          Faculty
        </button>
        <button className="bg-blue-400 w-48 rounded-full align-items-right mt-2 mx-10">
          Student
        </button>
     </div>
     </div>
  );
};

export default Header;