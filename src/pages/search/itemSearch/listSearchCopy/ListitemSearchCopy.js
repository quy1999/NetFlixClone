import React from "react";
import "./listitemSearch.scss"; 
import ListItem from '../../../../listItem/ListItem'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function ListitemSearchCopy() {
 function componentDidCatch(error, errorInfo) {
    
    console.log(error);
    console.log(errorInfo);
  }
  const searchTerm = useSelector((state) => {
    console.log(state);
    return state.searchReducerCopy;

  });
  const [search, setSearch] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=bd30798f95edf3a68e5338d495234cb1&language=en-US&page=1&include_adult=false&query=${searchTerm}`;
  

  const fetchPopular = async () => {

    if (searchTerm != undefined && searchTerm.length>0) {
      const data = await fetch(url);
      const list = await data.json();
      console.log(list.results);
      setSearch(list.results);
    }
  };
  useEffect(() => {
    fetchPopular();
  }, [searchTerm]);
  return (
    <div className="list">
      {search.map((movie, i) => {
        return <ListItem className='listItem' index={i} movie={movie}></ListItem>;
      })}
    </div>
  );
}
