import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
      <Hero />
      <MovieRow title={`nowPlaying`} url={endpoints.nowPlaying} />
      <MovieRow title={`popular`} url={endpoints.popular} />
      <MovieRow title={`topRated`} url={endpoints.topRated} />
      <MovieRow title={`airingToday`} url={endpoints.airingToday} />
      <MovieRow title={`upcoming`} url={endpoints.upcoming} />
    </>
  );
};

export default Home;
