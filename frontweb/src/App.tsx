import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarC from "./components/Navbar";

import "assets/styles/scss/custom.scss";
import Home from "pages/Home";
import ProductDetail from "pages/ProductDetail";
/*const Home = lazy(() => import("pages/Home"));*/
const HomeLazy = lazy(() => import("pages/Home"));
const Catalog = lazy(() => import("pages/Catalog"));

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<HomeLazy />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="productdetail" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
