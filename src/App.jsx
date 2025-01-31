import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/layout/header/Header.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import { Component as Footer } from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetail from "./components/pages/itemDetail/itemDetail.jsx";
import { NotFound, ComingSoon } from "./components/pages/notFound/NotFound.jsx";

function App() {
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
                  <ItemListContainer platform="Mock" />
                </main>

              </>
            }
          />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/platforms" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
