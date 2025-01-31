import { useState, useEffect } from "react";
import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";
import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader.jsx";

const Navbar = (props) => {
  const [itemsCounter, setItemsCounter] = useState(
    localStorage.getItem("itemsCounter")
  );

  setInterval(() => {
    setItemsCounter(localStorage.getItem("itemsCounter"));
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
                notificationsCounter={itemsCounter}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Start"
                text="Start"
                href="category/start"
                notificationsCounter={itemsCounter}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Running"
                text="Running"
                href="/category/running"
                notificationsCounter={itemsCounter}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Final"
                text="Final"
                href="/category/final"
                notificationsCounter={itemsCounter}
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
