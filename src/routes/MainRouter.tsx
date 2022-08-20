import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoryPage from "../pages/Category";
import Dashboard from "../pages/Dashboard";
import Loading from "../pages/Loading";
import NotFound from "../pages/NotFound";
import ProductPage from "../pages/ProductPage";

const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Search = lazy(() => import("../pages/Search"));

const MainRouter = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <Navbar />
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="catalog"
            element={
              <>
                <Navbar />
                <Suspense fallback={<Loading />}>
                  <Catalog />
                </Suspense>
                <Footer />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Navbar />
                <Suspense fallback={<Loading />}>
                  <Search />
                </Suspense>
                <Footer />
              </>
            }
          />

          <Route
            path="product/:id"
            element={
              <>
                <Navbar />
                <ProductPage />
                <Footer />
              </>
            }
          />
          <Route
            path="category/:category"
            element={
              <>
                <Navbar />
                <CategoryPage />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <NotFound message="Página no encontrada" />
                <Footer />
              </>
            }
          />
        </Route>
        <Route path="admin">
          <Route
            index
            element={
              <>
                <ul>
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                </ul>
                <Dashboard />
              </>
            }
          />
          <Route
            path="products"
            element={
              <>
                <ul>
                  <li>
                    <Link to="../">Dashboard</Link>
                  </li>
                </ul>
                <h2>Products</h2>
              </>
            }
          />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default MainRouter;
