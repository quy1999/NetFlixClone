import React from "react";
import "./featured.scss";
import { FaPlay } from "react-icons/fa";
import BackgroundNetflix from "./../../assets/images/6664893.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
export default function Featured(movie) {
  return (
    <div className="featured">
      <img src={BackgroundNetflix} alt="Error" className="imgfe" />

      <div className="info">
        <div className="logo">Kingdom</div>

        <div className="infofilm">
          <span>2016</span>
          <span className="colm" role="presentation"></span>
          <span>16+</span>
          <span className="colm"></span>
          <span>1h57m</span>
          <span className="colm"></span>
          <span>Action</span>
        </div>
        <span className="desc">
          While strange rumors about their ill king grip a kingdom, the crown
          prince becomes their only hope against a mysterious plague overtaking
          the land.
        </span>

        <div className="buttons">
          <button className="play">
            <FaPlay className="faplay"></FaPlay>
            <span className="splay"> Play</span>
          </button>
          <button className="more">
            <AiOutlineInfoCircle className="aiout"></AiOutlineInfoCircle>
            <span className="sinfo">InFo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
