import React from "react";
import "./watch.scss";
import { TiArrowBack } from "react-icons/ti";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <TiArrowBack></TiArrowBack>
        Home
      </div>

      <video
        className="video"
        autoPlay
        onProgress
        controls
        src="https://www.youtube.com/watch?v=xEp61A5YjrM"
      ></video>
    </div>
  );
}
