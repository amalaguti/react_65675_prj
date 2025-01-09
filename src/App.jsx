import Header from "./components/layout/header/Header.jsx"
import Navbar from "./components/layout/navbar/Navbar.jsx"
import { Component as Footer} from "./components/layout/footer/Footer.jsx"

function App() {
  return (
    <>
      <Header user="Adrian" />
      <Navbar />
      <Footer />
      </>
  )
}


export default App
