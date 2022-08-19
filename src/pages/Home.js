import React from "react";
import Main from "../components/Main/Main";
import Row from "../components/Row/Row";
import request from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="UpComing" fetchURL={request.requestUpcoming} />
      <Row title="Popular" fetchURL={request.requestPopular} />
      <Row title="Trending" fetchURL={request.requestTrending} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="Horror" fetchURL={request.requestHorror} />
    </div>
  );
};

export default Home;
