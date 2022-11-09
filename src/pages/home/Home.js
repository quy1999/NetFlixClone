import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
export default function Home() {
  const [genres, setGenres] = useState([]); //Khai báo lưu movie từ Api
  const url =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=bd30798f95edf3a68e5338d495234cb1&language=en-US";
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url); //gọi api
    const list = await data.json(); //lấy json
    console.log(list);
    setGenres(list.genres); //movie laf json
  };
  return (
    <div className="home">
      {/* <Navbar />
      <Featured /> */}
      
      {
        genres.map((q) => {
          return <List nameGernes={q.name} idGernes={q.id} />;
        }) //Đây chính là Array function bên trái là đầu vào ,bên phải là return
      }




    </div>
  );
}
