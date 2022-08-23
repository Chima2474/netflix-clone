import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const fetchMovies = async () => {
    try {
      const response = await fetch(fetchURL);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log("there was an error");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const sliderLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold  rounded-full md:text-xl p-4">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white left-0 opacity-50 rounded-full absolute hover:opacity-100 z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative  cursor-pointer  "
        >
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
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

export default Row;
