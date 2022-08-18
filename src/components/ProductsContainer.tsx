import React, { ReactElement, useEffect } from "react";
import { Product } from "../interfaces/product.interface";
import ProductItem from "./ProductItem";

const ProductsContainer = ({
  products,
}: {
  products: Array<Product>;
}): ReactElement => {
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="d-flex flex-wrap justify-content-around gap-2 py-3">
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
