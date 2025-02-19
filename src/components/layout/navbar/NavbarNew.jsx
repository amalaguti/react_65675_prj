import { useState, useEffect } from "react";
import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";
import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader.jsx";

import { useContext } from "react";
import { NotificationsContext } from "../../../context/Contexts.jsx";

const Navbar = (props) => {
  console.log(">>>> Navbar");
  const { notifications } = useContext(NotificationsContext);
  const { notificationsByStatus } = useContext(NotificationsContext);
  console.log(">>>> notifications: ", notifications);
  // console.log(">>>> notifications total: ", notifications.length);
  console.log(">>>> notificationsByStatus: ", notificationsByStatus);

  // const itemsCounter_all = notifications ? notifications.length : 0;
  // const itemsCounter_start = notificationsByStatus.start ? notificationsByStatus.start.length : 0;
  // const itemsCounter_running = notificationsByStatus.running ? notificationsByStatus.running.length : 0;
  // const itemsCounter_final = notificationsByStatus.final ? notificationsByStatus.final.length : 0;
  const [itemsCounter_all, setItemsCounter_all] = useState(
    notifications ? notifications.length : 0
  );
  const [itemsCounter_start, setItemsCounter_start] = useState(
    notificationsByStatus.start ? notificationsByStatus.start.length : 0
  );
  const [itemsCounter_running, setItemsCounter_running] = useState(
    notificationsByStatus.running ? notificationsByStatus.running.length : 0
  );
  const [itemsCounter_final, setItemsCounter_final] = useState(
    notificationsByStatus.final ? notificationsByStatus.final.length : 0
  );

  useEffect(() => {
    setItemsCounter_all(notifications ? notifications.length : 0);
    setItemsCounter_start(
      notificationsByStatus.start ? notificationsByStatus.start.length : 0
    );
    setItemsCounter_running(
      notificationsByStatus.running ? notificationsByStatus.running.length : 0
    );
    setItemsCounter_final(
      notificationsByStatus.final ? notificationsByStatus.final.length : 0
    );
  }
  , [notifications, notificationsByStatus]);

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
