import React, { ReactElement, useState, createContext } from "react";
import { Banner } from "../interfaces/banner.interface";
import { Category } from "../interfaces/category.interface";
import { Product } from "../interfaces/product.interface";

interface Data {
  categories: Array<Category>;
  setCategories?: (categories: Array<Category>) => void;
  products: Array<Product>;
  setProducts?: (products: Array<Product>) => void;
  banners: Array<Banner>;
  setBanners?: (products: Array<Banner>) => void;
}

const INIT_DATA: Data = {
  categories: [],
  setCategories: undefined,
  products: [],
  setProducts: undefined,
  banners: [],
  setBanners: undefined,
};

export const DataContext = createContext<Data>(INIT_DATA);

const DataProvider = ({ children }: { children: ReactElement }) => {
  const [categories, setCategories] = useState<Array<Category>>(
    INIT_DATA.categories
  );
  const [products, setProducts] = useState<Array<Product>>(INIT_DATA.products);
  const [banners, setBanners] = useState<Array<Banner>>(INIT_DATA.banners);

  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        banners,
        setBanners,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
