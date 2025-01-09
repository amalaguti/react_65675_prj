import "./NavbarNotificationElement.css";

const NavbarNotificationElement = (props) => {
  return (
    <li className={props.className} >
      <a className={props.className} href={props.href}>
        {props.text}
      </a>
    </li>
  );
};

export default NavbarNotificationElement;
