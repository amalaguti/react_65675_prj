import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";
import { CartWidget } from "../../common/cartWidget/CartWidget.jsx";
import NotificationsHeader from "../../common/notificationsHeader/NotificationsHeader.jsx";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-container-elements">
            <div className="navbar-container-general">
              <NavbarGeneralElement text="Home" href="/home" />
              <NavbarGeneralElement text="Platforms" href="/Platforms" />
            </div>
            <div className="navbar-container-notifications">
              <NotificationsHeader id="notifications-header" className="notifications-header" logoId="notifications-header-logo"/>
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-All"
                text="All"
                href="/NotificationsAll"
                notificationsCounter={props.notificationsCounter}
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Start"
                text="Start"
                href="/NotificationsStart"
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Running"
                text="Running"
                href="/NotificationsRunning"
              />
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-Final"
                text="Final"
                href="/NotificationsFinal"
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
