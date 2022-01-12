import "./shared.css";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function Shared() {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="sharedTop">
          <img className="sharedProfileImg" src="/assets/dog3.jpg" alt="" />
          <input className="sharedInput" placeholder="Whats in your mind" />
        </div>
        <hr className="sharedHr" />
        <div className="sharedBottom">
          <div className="sharedOptions">
            <div className="sharedOption">
              <PermMediaIcon htmlColor="tomato" className="sharedIcon" />
              <span className="sharedOption">Photo or Video</span>
            </div>
            <div className="sharedOption">
              <LabelIcon htmlColor="blue" className="sharedIcon" />
              <span className="sharedOption">Tag</span>
            </div>
            <div className="sharedOption">
              <RoomIcon htmlColor="green" className="sharedIcon" />
              <span className="sharedOption">Location</span>
            </div>
            <div className="sharedOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="sharedIcon" />
              <span className="sharedOption">Feelings</span>
            </div>
          </div>
          <button className="sharedButton">Share</button>
        </div>
      </div>
    </div>
  );
}
