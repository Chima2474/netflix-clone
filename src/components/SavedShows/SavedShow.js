import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../Firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShow = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc?.data()?.savedShow);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieRef, {
        savedShow: result,
      });
    } catch (error) {
      alert("An Error Occured Please Check Your Network");
    }
  };
  return (
    <>
      <h2 className="text-white font-bold  rounded-full md:text-xl p-4">
        My Shows
      </h2>
      <div className="relative  flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 opacity-50 rounded-full absolute hover:opacity-100 z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  cursor-pointer  "
        >
          {movies?.map((movie) => {
            const { id, title, img } = movie;
            return (
              <div className="w-[160px] sm:w-[200px] md:2-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/original${img}`}
                  alt={title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
                  <p className="white-space-normal text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {movie?.title}
                  </p>
                  <p
                    onClick={() => deleteShow(id)}
                    className="absolute text-gray-300 top-4 right-4"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
          {/* {movies?.map((movie) => {
            <div className="w-[160px] sm-[200px] md:2-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/original${movie?.img}`}
                alt={movie?.title}
              />
              <h4>{movie.title}</h4>
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {movie?.title}
                </p>
              </div>
            </div>;
          })} */}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white right-0 opacity-50 rounded-full absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShow;
