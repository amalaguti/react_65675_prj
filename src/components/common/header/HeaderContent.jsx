import "./HeaderContent.css";
import { LuTowerControl } from "react-icons/lu";

const HeaderContent = (props) => {
  return (
    <div className="headerContent">
      <LuTowerControl id="svgTowerControl" />
      <p>
        Notifications Manager:{" "}
        <span className="welcomeMsg">Welcome {props.user || "Guest"}</span>
      </p>
    </div>
  );
};

export default HeaderContent;
