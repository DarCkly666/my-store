import React, { FC, ReactElement } from "react";
import Carousel from "../components/Carousel";
import Resent from "../components/Resent";

const Home: FC = (): ReactElement => {
  return (
    <div className="bg-dark min-vh-100">
      <Carousel />
      <Resent />
    </div>
  );
};

export default Home;
