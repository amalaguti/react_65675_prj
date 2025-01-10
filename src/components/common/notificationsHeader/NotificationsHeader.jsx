import "./notificationsHeader.css";
import { MdNotificationsActive } from "react-icons/md";

export default function NotificationsHeader(props) {
  return (
    <div id={props.id} className={props.className}>
      <h2> Notifications </h2>{" "}
      <MdNotificationsActive id={props.logoId} />
    </div>
  );
}
