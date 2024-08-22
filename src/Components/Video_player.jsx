import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Video_player = ({ URL }) => {
  return (
    <div className="player">
      <div className="alt-text">Video Player</div>
      <div className="mini-player">
        <ReactPlayer
          className="reactplayer1"
          url={URL}
          controls={true}
          width={455}
          height={305}
        />
      </div>
    </div>
  );
};

export default Video_player;
