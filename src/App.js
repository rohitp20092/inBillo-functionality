import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import ProductDisplay from "./Component/Products/ProductDispaly";
import CreditCard from "./Component/CreditCard/CreditCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductDisplay />} />
          <Route path="/CreditCard" element={<CreditCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
