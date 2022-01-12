import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Social Network</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <SearchIcon className="search" />

          <input
            placeholder="Search for friends, post or video "
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLinks">Homepage</span>
          <span className="navbarLinks">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            {/* <i class="fas fa-user-alt"></i> */}
            <PersonIcon />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            {/* <i class="fab fa-facebook-messenger"></i> */}
            <ChatBubbleIcon />

            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            {/* <i class="fas fa-comment-alt"></i> */}
            <NotificationsIcon />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/dog2.jpg" alt="" className="navbarCover" />
      </div>
    </div>
  );
}
