import Header from "./components/layout/header/Header.jsx"
import Navbar from "./components/layout/navbar/Navbar.jsx"
import { Component as Footer} from "./components/layout/footer/Footer.jsx"

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <Header user="Adrian" />
      <Navbar />
      <ItemListContainer />
      <Footer />
      </>
  )
}


export default App
