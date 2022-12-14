import React from "react";
import SavedShow from "../components/SavedShows/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full h-[65vh] text-white">
        <img
          className=" absolute w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Netflix"
        />
        <div className="bg-black/30 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold "> My Shows</h1>
        </div>
      </div>

      <SavedShow />
    </>
  );
};

export default Account;
