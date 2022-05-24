import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarC from "./components/Navbar";

import "assets/styles/scss/custom.scss";
import Home from "pages/Home";
/*const Home = lazy(() => import("pages/Home"));*/
const HomeLazy = lazy(() => import("pages/Home"));

function App() {
  return (
    <div className="App">
      <NavbarC />
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<HomeLazy />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
