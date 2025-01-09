import "./Header.css";
import HeaderContent from "../../common/header/HeaderContent.jsx";
// TODO: Add logo, react icons and bootstrap
const Header = (props) => {
  return (
    <>
      <header>
        <HeaderContent user={props.user} />
      </header>
    </>
  );
};

export default Header;
