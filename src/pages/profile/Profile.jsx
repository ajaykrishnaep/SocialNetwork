import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <div>
      <>
        <Navbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src="assets/dog2.jpg" alt="" />
                <img className="profileUserImg" src="assets/dog3.jpg" alt="" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">User Name</h4>
                <span className="profileInfoDesc">User Info</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
