import { useState, useEffect } from "react";
import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";
import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader.jsx";

const Navbar = (props) => {
  const [itemsCounter_all, setItemsCounter_all] = useState(
    localStorage.getItem("itemsCounter_all")
  );
  const [itemsCounter_start, setItemsCounter_start] = useState(
    localStorage.getItem("itemsCounter_start")
  );
  const [itemsCounter_running, setItemsCounter_running] = useState(
    localStorage.getItem("itemsCounter_running")
  );
  const [itemsCounter_final, setItemsCounter_final] = useState(
    localStorage.getItem("itemsCounter_final")
  );

  setInterval(() => {
    setItemsCounter_all(localStorage.getItem("itemsCounter_all"));
    setItemsCounter_start(localStorage.getItem("itemsCounter_start"));
    setItemsCounter_running(localStorage.getItem("itemsCounter_running"));
    setItemsCounter_final(localStorage.getItem("itemsCounter_final"));
  }, 1000);

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
