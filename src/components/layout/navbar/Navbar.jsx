import "./navbar.css";
import NavbarGeneralElement from "../../common/navbar/NavbarGeneralElement.jsx";
import NavbarNotificationElement from "../../common/navbar/NavbarNotificationElement.jsx";

// TODO: Add logo, react icons and bootstrap
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar">
        <div>
          <ul className="navbar-container">
            <div className="navbar-container-general">
              <NavbarGeneralElement text="Home" href="/home" />
              <NavbarGeneralElement text="Platforms" href="/Platforms" />
            </div>
            <div className="navbar-container-notifications">
              <h2> Notifications </h2>
              <NavbarNotificationElement
                className="notificationStatus notificationStatus-All"
                text="All"
                href="/NotificationsAll"
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
