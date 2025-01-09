import "./HeaderContent.css";

const HeaderContent = (props) => {
  return (
      <p>
        Notifications Manager:{" "}
        <span className="welcomeMsg">Welcome {props.user || "Guest"}</span>
      </p>
    
  );
};

export default HeaderContent;
