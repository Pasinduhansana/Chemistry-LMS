import React from "react";
import ReactPlayer from "react-player";

const Video_player = ({ URL }) => {
  return (
    <div className="fullscreen-player">
      <ReactPlayer
        className="fullscreen-reactplayer"
        url={URL}
        controls={true}
        width={2000}
        height={480}
      />
    </div>
  );
};
export default Video_player;
