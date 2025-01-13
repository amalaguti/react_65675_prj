import "./NavbarNotificationElement.css";

const NavbarNotificationElement = (props) => {


  return (
    <li className={props.className} >
      <a className={props.className} href={props.href}>
        {props.text}
      </a>
      {props.notificationsCounter >= 0 ?
        <span className="notification-counter">{" "}{props.notificationsCounter}</span> : null
      }
    </li>
  );
};

export default NavbarNotificationElement;


// {props.notificationsCounter > 0 && (
//   <span className="notification-counter">{props.notificationsCounter}</span>
// )}