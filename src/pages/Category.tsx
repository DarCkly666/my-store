import React, { ReactElement, useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import { useParams } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";
import NotFound from "./NotFound";

const Category = ({ products }: { products: Array<Product> }): ReactElement => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (category) {
      const filter = products.filter((product: Product) =>
        product.category.includes(category)
      );
      setCategoryProducts(filter);
      setLoading(false);
    }
  }, []);
  return (
    <>
      {categoryProducts.length === 0 ? (
        <NotFound />
      ) : (
        <div className="min-vh-100 bg-dark">
          {loading ? (
            <h2 className="text-custom-red">Loading...</h2>
          ) : (
            <div
              className=""
              style={{
                height: "200px",
                background: `url(${categoryProducts[0].images[0]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div
                className="w-100 h-100 p-4 p-md-4 d-flex align-items-center"
                style={{
                  background: "linear-gradient(90deg, #FF626D, transparent)",
                }}
              >
                <h2 className="text-light">{category}</h2>
              </div>
              <ProductsContainer products={categoryProducts} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Category;
