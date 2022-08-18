import React, { ReactElement, useState, createContext } from "react";
import { Category } from "../interfaces/category.interface";
import { Product } from "../interfaces/product.interface";

interface Data {
  categories: Array<Category>;
  setCategories?: (categories: Array<Category>) => void;
  products: Array<Product>;
  setProducts?: (products: Array<Product>) => void;
}

const INIT_DATA: Data = {
  categories: [],
  setCategories: undefined,
  products: [],
  setProducts: undefined,
};

export const DataContext = createContext<Data>(INIT_DATA);

const DataProvider = ({ children }: { children: ReactElement }) => {
  const [categories, setCategories] = useState<Array<Category>>(
    INIT_DATA.categories
  );
  const [products, setProducts] = useState<Array<Product>>(INIT_DATA.products);

  return (
    <DataContext.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
