import "./NavbarGeneralElement.css";

const NavbarGeneralElement = (props) => {
  return (
    <li>
      <a className={props.className} href={props.href}>
        {props.text}
      </a>
    </li>
  );
};

export default NavbarGeneralElement;
