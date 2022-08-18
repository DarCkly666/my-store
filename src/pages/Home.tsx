import React, { ReactElement, useContext, useEffect } from "react";
import Carousel from "../components/Carousel";
import Recent from "../components/Recent";
import { DataContext } from "../context/DataProvider";

const Home = (): ReactElement => {
  const { products } = useContext(DataContext);
  return (
    <div className="bg-dark min-vh-100">
      <Carousel products={products} />
      <Recent products={products} />
    </div>
  );
};

export default Home;
