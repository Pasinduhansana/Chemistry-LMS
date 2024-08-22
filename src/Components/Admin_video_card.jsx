import React from "react";
import Player from "../Components/Fullscreen_video_player";

const Admin_video_card = () => {
  return (
    <div className="video_page">
      <div className="fullscreen-grid1">
        <div className="fullscreen-grid1-light-box">
          <div className="fullscreen-video-player">
            <Player />
          </div>
          <button className="btn">Insert</button>
          <button className="btn">Update</button>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Admin_video_card;
