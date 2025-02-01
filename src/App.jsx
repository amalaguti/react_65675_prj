import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/layout/header/Header.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import { Component as Footer } from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/itemDetail/itemDetail.jsx";
import { NotFound, ComingSoon } from "./components/pages/notFound/NotFound.jsx";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  const platform = "Mock";
  return (
    <>
      <BrowserRouter>
        <Header user="Adrian" />
        <Navbar platform="Mock" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main>
                  <ItemListContainer platform={platform} />
                </main>
              </>
            }
          />
          {/* For public deployment base path */}
          <Route
            path="/react_65675_prj"
            element={
              <>
                <main>
                  <ItemListContainer platform={platform} />
                </main>
              </>
            }
          />
          <Route path="/category/:status" element={<ItemListContainer platform={platform}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/platforms" element={<ComingSoon />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
