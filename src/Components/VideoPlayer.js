import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-app">
      <h1 className="text-center">VIDEO APPLICATION</h1>
      <div className="video-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
export default VideoPlayer;
