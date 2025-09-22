import "./message.css";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import {pf} from '../../requestMethods'
export default function Message({ message, own }) {
  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={pf + "DefaultPic.png"}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}