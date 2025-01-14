import { useState } from "react";

import { mockNotifications } from "./mock/notifications/notifications";

import Header from "./components/layout/header/Header.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import { Component as Footer } from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

import { Counter } from "./components/common/counter/Counter.jsx";

function App() {
  const [count, setCount] = useState(mockNotifications.length);

  return (
    <>
      <Header user="Adrian" />
      <Navbar notificationsCounter={count} platform="Mock"/>
      <main>
        <Counter count={count} callback={setCount} />
        <ItemListContainer notifications={mockNotifications} platform="Mock"/>
      </main>
      <Footer />
    </>
  );
}

export default App;
