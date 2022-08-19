import React, { useEffect, useState } from "react";
import request from "../../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const fetchMovies = async () => {
    try {
      const response = await fetch(request.requestPopular);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log("There was an error");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(randomMovie);
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    } else return str;
  };

  return (
    <section className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full  h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{randomMovie?.title}</h1>
          <div className="py-4">
            <button className="border bg-gray-300 text-black py-2 px-5 ">
              Play
            </button>
            <button className="border text-white py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {randomMovie?.release_date}
          </p>
          <p className="w-full md:mas-w-[70%] lg:max-w-[50%] xl:mas-w-[35%] text-gray-200">
            {truncateString(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
