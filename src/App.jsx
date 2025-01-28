import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/layout/header/Header.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import { Component as Footer } from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ProductDetail from "./components/common/productCard/ProductDetail.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header user="Adrian" />
            <Navbar platform="Mock" />
            <main>
            <ItemListContainer platform="Mock" />
            </main>

            <Footer />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </>
  );
}

export default App;
