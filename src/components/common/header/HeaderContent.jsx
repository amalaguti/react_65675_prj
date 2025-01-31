import "./HeaderContent.css";
import { LuTowerControl } from "react-icons/lu";
import { Link } from "react-router";

const HeaderContent = (props) => {
  return (
    <div className="headerContent">
      <Link to="/" className="flex items-center">
        <LuTowerControl id="svgTowerControl" />
      </Link>
      <p>
        Notifications Manager:{" "}
        <span className="welcomeMsg">Welcome {props.user || "Guest"}</span>
      </p>
    </div>
  );
};

export default HeaderContent;
