import React, { ReactElement } from "react";
import Carousel from "../components/Carousel";
import Recent from "../components/Recent";
import { Product } from "../interfaces/product.interface";

const Home = ({ products }: { products: Array<Product> }): ReactElement => {
  return (
    <div className="bg-dark min-vh-100">
      <Carousel products={products} />
      <Recent products={products} />
    </div>
  );
};

export default Home;
