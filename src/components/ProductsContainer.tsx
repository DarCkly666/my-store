import React, { ReactElement } from "react";
import { Product } from "../interfaces/product.interface";
import ProductItem from "./ProductItem";

const ProductsContainer = ({
  products,
}: {
  products: Array<Product>;
}): ReactElement => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly gap-2 py-3">
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
