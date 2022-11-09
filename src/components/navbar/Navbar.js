//rfc
import React, { useState } from "react";
import "./navbar.scss";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiNotification2Line } from "react-icons/ri";
import { AiOutlineArrowDown } from "react-icons/ai";
import NavbarImages from "./../../assets/images/netflix-logo-png-2582.png";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchTermChanges } from "../../SearchReducer";
import { searchChanges } from "../../SearchReducerCopy";
import Search from "../../pages/search/Search";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  window.onscroll = () => {
    //Sự kiện khi cuộn
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    setIsSearch(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null); //Không nghe sự kiện cuộn nữa//
  }; //Sự kiện kéo xuống

  //Sự kiện tìm kiếm
  const dispatch = useDispatch();

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={NavbarImages} alt="Error" className="imgleft" />
          <Link to="/HomePage" className="spanz">Homepage</Link>
          <span className="span">Series</span>
          <span className="span">Movies</span>
          <span className="span">New and Popular</span>
          <span className="span">My List</span>
        </div>

        <div className="right">
          <div className="navSearch">
            <BiSearch className="biSearch" />
            <input
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  dispatch(searchTermChanges(event.target.value));
                }
              }}
              onChange={(event) => {
                dispatch(searchChanges(event.target.value));
              }}
              type="text"
              placeholder="Title, genres, people"
            />
          </div>
          <span>KID</span>
          <RiNotification2Line className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="imgright"
          />

          <div className="profile">
            <AiOutlineArrowDown className="icon"></AiOutlineArrowDown>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/HomePage" components={<Search/>} />
      </Routes>
    </div>
  );
}
