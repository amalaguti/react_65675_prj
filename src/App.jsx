import { useState } from "react";

import { mockNotifications } from "./mock/notifications/notifications";

import { Button } from "flowbite-react";
import Header from "./components/layout/header/Header.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import { Component as Footer } from "./components/layout/footer/Footer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(mockNotifications.length);

  function handleClickBtnAddNotificationAdd() {
    setCount(count + 1);
  }
  function handleClickBtnAddNotificationSubstract() {
    setCount(count - 1);
  }  

  return (
    <>
      <Header user="Adrian" />
      <Navbar notificationsCounter={count}/>


            <Button className="p-0 m-0 text-sm" onClick={handleClickBtnAddNotificationSubstract}>-</Button>
            <h2>Notifications: {count} </h2>
            <Button id="BtnAddNotification" onClick={handleClickBtnAddNotificationAdd}>+</Button>
      
      
      
      <ItemListContainer notifications={mockNotifications} count={count}/>
      <Footer />
    </>
  );
}

export default App;
