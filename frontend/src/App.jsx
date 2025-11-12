import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Nav from "./components/nav.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import Shop from "./components/shop.jsx";
import ProductMaintenance from "./components/productMaintenance.jsx";
import UserMaintenance from "./components/UserMaintenance.jsx";
import Login from "./components/Login.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/prodMaintenance" element={<ProductMaintenance />} />
          <Route path="/userMaintenance" element={<UserMaintenance />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>

      {/* <Nav />
      <Home />
      <Footer /> */}
    </>
  );
}

export default App;
