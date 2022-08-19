import React, { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
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
  console.log(movies);
  return (
    <main>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center"></div>
    </main>
  );
};

export default Row;
