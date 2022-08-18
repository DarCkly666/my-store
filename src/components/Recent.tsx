import React, { ReactElement, useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import ProductItem from "./ProductItem";

const Recent = ({ products }: { products: Array<Product> }): ReactElement => {
  const [recent, setRecent] = useState<Array<Product>>([]);

  useEffect(() => {
    products.sort(
      (productA: Product, productB: Product) =>
        productA.created - productB.created
    );
    setRecent(products);
  }, []);
  return (
    <div className="container py-4">
      <h3 className="text-center py-4 text-custom-red">Recent Added</h3>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {recent.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
