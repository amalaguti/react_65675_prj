/* eslint-disable react/prop-types */
import "./NavbarNotificationElement.css";
import { Link } from "react-router";

const NavbarNotificationElement = (props) => {
  return (
    <li className={props.className}>
      <Link className={props.className} to={props.href}>
        {props.text}
      </Link>
      {props.notificationsCounter >= 0 ? (
        <span className="notification-counter">
          {" "}
          {props.notificationsCounter}
        </span>
      ) : null}
    </li>
  );
};

export default NavbarNotificationElement;
