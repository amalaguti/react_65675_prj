import { useState, useEffect } from "react";
import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";
import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader.jsx";

const Navbar = (props) => {
  const [itemsCounter_all, setItemsCounter_all] = useState(
    localStorage.getItem("itemsCounter_all") || 0
  );
  const [itemsCounter_start, setItemsCounter_start] = useState(
    localStorage.getItem("itemsCounter_start") || 0
  );
  const [itemsCounter_running, setItemsCounter_running] = useState(
    localStorage.getItem("itemsCounter_running") || 0
  );
  const [itemsCounter_final, setItemsCounter_final] = useState(
    localStorage.getItem("itemsCounter_final") || 0
  );

  // TODO: Fix the issue with the counter not updating when the user adds an item to the cart
  // The new value is not reflected in the NavBar
  // useEffect(() => {
  //   setItemsCounter_all(localStorage.getItem("itemsCounter_all"));
  //   setItemsCounter_start(localStorage.getItem("itemsCounter_start"));
  //   setItemsCounter_running(localStorage.getItem("itemsCounter_running"));
  //   setItemsCounter_final(localStorage.getItem("itemsCounter_final"));
  // }, [itemsCounter_all, itemsCounter_start, itemsCounter_running, itemsCounter_final]);

  // FIX: The issue with the counter not updating when the user adds an item to the cart by adding event listener for local storage. In addition, the event for storage is triggered on update of the local storage counters by fetch.js module.
  useEffect(() => {
    function handleLocalStorageUpdate(e) {
      console.log("Local storage updated", e);
      setItemsCounter_all(localStorage.getItem("itemsCounter_all"));
      setItemsCounter_start(localStorage.getItem("itemsCounter_start"));
      setItemsCounter_running(localStorage.getItem("itemsCounter_running"));
      setItemsCounter_final(localStorage.getItem("itemsCounter_final"));
    }
    window.addEventListener('storage', handleLocalStorageUpdate);
    return () => {
      window.removeEventListener('storage', handleLocalStorageUpdate);
    };
  }, [itemsCounter_all, itemsCounter_start, itemsCounter_running, itemsCounter_final]);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-container-elements">
            <div className="navbar-container-general">
              <NavbarGeneralElement text="Home" href="/" />
              <NavbarGeneralElement text="Platforms" href="/platforms" />
            </div>
            <div className="navbar-container-notifications">
              <NotificationsHeader
                id="notifications-header"
                className="notifications-header"
                logoId="notifications-header-logo"
                platform={props.platform}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-All"
                text="All"
                href="/category/All"
                notificationsCounter={itemsCounter_all}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Start"
                text="Start"
                href="category/start"
                notificationsCounter={itemsCounter_start}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Running"
                text="Running"
                href="/category/running"
                notificationsCounter={itemsCounter_running}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Final"
                text="Final"
                href="/category/final"
                notificationsCounter={itemsCounter_final}
              />
            </div>
          </ul>
          <div className="navbar-container-cartWidget">
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
