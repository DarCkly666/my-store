import React, { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Category } from "./interfaces/category.interface";
import { Product } from "./interfaces/product.interface";
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Search = lazy(() => import("./pages/Search"));

import dataCategories from "./utils/categories.json";
import dataProducts from "./utils/products.json";
import NotFound from "./pages/NotFound";

const initialCategories: Array<Category> = [];
const initialProducts: Array<Product> = [];

function App() {
  const [categories, setCategories] =
    useState<Array<Category>>(initialCategories);
  const [products, setProducts] = useState<Array<Product>>(initialProducts);

  useEffect(() => {
    setCategories(dataCategories as Array<Category>);
    setProducts(dataProducts as Array<Product>);
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home products={products} />
            </Suspense>
          }
        />
        <Route
          path="/catalog"
          element={
            <Suspense fallback={<></>}>
              <Catalog categories={categories} products={products} />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<></>}>
              <Search products={products} categories={categories} />
            </Suspense>
          }
        />
        <Route path="/product/:id" element={<h4>Product</h4>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
