import "./navbar.css";

// TODO: Add logo, react icons and bootstrap
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>
          Notifications Manager:{" "}
          <span className="welcomeMsg">Welcome {props.user || "Guest"}</span>
        </p>
      </div>
      <div>
        <ul className="navbar-container">
          <div className="navbar-container-general">
            <li>
              <a href="/home">Home</a>
            </li>

            <li>
              <a href="/Platforms">Platforms</a>
            </li>
          </div>
          <div className="navbar-container-notifications">
            <h2> Notifications </h2>
            <li>
              <a
                className="notificationStatus notificationStatus-All"
                href="/NotificationsAll"
              >
                All
              </a>
            </li>
            <li>
              <a
                className="notificationStatus notificationStatus-Start"
                href="/NotificationsStart"
              >
                Start
              </a>
            </li>
            <li>
              <a
                className="notificationStatus notificationStatus-Running"
                href="/NotificationsRunning"
              >
                Running
              </a>
            </li>
            <li>
              <a
                className="notificationStatus notificationStatus-Final "
                href="/NotificationsFinal"
              >
                Final
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
