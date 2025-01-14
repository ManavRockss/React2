import { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieServices";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    });
  }, []);
  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "...." : str;
  };

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[828px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />
        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className=" capitalize bg-gray-300 rounded text-black font-nsans-bold hover:bg-gray-500 py-2 px-5 m-2">
              Play
            </button>
            <button className="capitalize bg-gray-300 rounded text-black font-nsans-bold hover:bg-gray-500  py-2 px-5 m-2">
              Watch Later
            </button>
            <div>
              <p className="text-sm">{release_date}</p>
              <p className="font-nsans-medium text-m w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                {truncate(overview, 150)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
