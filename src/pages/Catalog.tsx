import React, { ReactElement, useContext, useState } from "react";
import ProductsContainer from "../components/ProductsContainer";
import { DataContext } from "../context/DataProvider";
import { Category } from "../interfaces/category.interface";
import { Product } from "../interfaces/product.interface";

const Catalog = (): ReactElement => {
  const { products, categories, banners } = useContext(DataContext);
  const [sortedProducts, setSortedProducts] =
    useState<Array<Product>>(products);
  const [sortAlphabet, setSortAlphabet] = useState<boolean>(true);
  const [sortLatest, setSortLatest] = useState<boolean>(true);
  const [categoriesFilter, setCategoriesFilter] = useState<Array<string>>([]);

  const sortAlphabetically = (): void => {
    if (sortAlphabet) {
      sortedProducts.sort((productA: Product, productB: Product) =>
        productA.name > productB.name ? 1 : -1
      );
    } else {
      sortedProducts.sort((productA: Product, productB: Product) =>
        productA.name > productB.name ? -1 : 1
      );
    }
    setSortedProducts([...sortedProducts]);
    setSortAlphabet(!sortAlphabet);
  };

  const sortLatestly = (): void => {
    if (sortLatest) {
      sortedProducts.sort(
        (productA: Product, productB: Product) =>
          productA.created - productB.created
      );
    } else {
      sortedProducts.sort(
        (productA: Product, productB: Product) =>
          productB.created - productA.created
      );
    }
    setSortedProducts([...sortedProducts]);
    setSortLatest(!sortLatest);
  };

  const sortByCategory = (): void => {
    console.log(categoriesFilter);
    if (categoriesFilter.length === 0) {
      setSortedProducts([...products]);
    } else {
      const filter = products.filter((product: Product) => {
        const isIncluded = product.category.some((c: string) =>
          categoriesFilter.includes(c)
        );
        if (isIncluded) {
          console.log(product);
          return product;
        }
      });
      setSortedProducts([...filter]);
    }
  };

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const name = event.target.name;
    if (event.target.checked) {
      categoriesFilter.push(name);
      setCategoriesFilter(categoriesFilter);
    } else {
      const index = categoriesFilter.indexOf(event.target.name);
      categoriesFilter.splice(index, 1);
      setCategoriesFilter([...categoriesFilter]);
    }
    sortByCategory();
  };

  return (
    <div className="bg-dark min-vh-100">
      <div
        className=""
        style={{
          height: "200px",
          background: `${banners[0].banner}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-100 h-100 p-4 p-md-4 d-flex align-items-center"
          style={{ background: "linear-gradient(90deg, #FF626D, transparent)" }}
        >
          <h2 className="text-light">Catálogo</h2>
        </div>
      </div>
      <div className="row mw-100 m-0 p-4">
        <div className="col-sm-12 col-md-3">
          <h3 className="text-custom-red">Filtro</h3>
          <ul className="list-group bg-dark">
            {categories.map((category: Category) => (
              <li
                key={category.id}
                className="list-group-item d-flex justify-content-between align-items-center form-check bg-transparent border-0"
              >
                <label
                  className="form-check-label text-light"
                  htmlFor={category.name}
                >
                  {category.name}
                </label>
                <input
                  className="form-check-input"
                  name={category.name}
                  id={category.name}
                  type="checkbox"
                  onChange={handleCheckbox}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="container block text-light d-flex justify-content-end align-items-center px-5">
            <h5 className="text-light m-0">Ordenar</h5>
            <button
              className="p-2 bg-transparent border-0 text-light mx-3"
              onClick={sortAlphabetically}
            >
              <i className="fa-solid fa-arrow-down-a-z"></i>
            </button>
            <button
              className="p-2 bg-transparent border-0 text-light"
              onClick={sortLatestly}
            >
              <i className="fa-solid fa-arrow-down-short-wide"></i>
            </button>
          </div>
          <ProductsContainer products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
