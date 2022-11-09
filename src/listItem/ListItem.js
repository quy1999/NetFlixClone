import React, { useRef, useState } from "react";
import "./listItem.scss";
import { FaPlay } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useEffect } from "react";
export default function ListItem({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const refColor=useRef();
  const stateChange = () =>{
    
    refColor.current.style.color= '#fff';
    }
  return (
    <div className="ListItem">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="Error"
        className="img"
      />

      <div className="itemInfo">
        <div className="nameFilm">{movie.title}</div>
        <div className="icons">
          <FaPlay className="icon"></FaPlay>
          <IoMdAddCircle className="icon" ref={refColor} onClick={stateChange}></IoMdAddCircle>
          <AiFillLike className="icon"></AiFillLike>
          <AiFillDislike className="icon"></AiFillDislike>
        </div>
        <div className="itemInfoTop">
          <span>1hour54 mins</span>
          <span>{movie.release_date}</span>
        </div>
        <div className="desc">{movie.overview}</div>
        <div className="infoim">
          <div className="lan">Language: {movie.original_language}</div>
          <div className="imdb">IMDB: {movie.vote_average}</div>
        </div>
      </div>
    </div>
  );
}




