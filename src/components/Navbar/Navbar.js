import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="flex item-center justify-between absolute w-full p-4 z-[100]">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
        <div>
          <button className="text-white pr-4">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded text-white">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
