import "./NavbarGeneralElement.css";
import { Link } from "react-router";

const NavbarGeneralElement = (props) => {
  return (
    <li>
      <Link to={props.href} className={props.className}>
      {props.text}
      </Link>
    </li>
  );
};

export default NavbarGeneralElement;

// <a className={props.className} href={props.href}>
// className="{props.className} flex items-center"
// </a>