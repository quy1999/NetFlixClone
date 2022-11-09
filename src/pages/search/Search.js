import React from "react";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import Home from "../home/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Featured from "../../components/featured/Featured";
import ListitemSearch from "./itemSearch/listSearch/ListitemSearch";
import ListitemSearchCopy from "./itemSearch/listSearchCopy/ListitemSearchCopy";
export default function Search() {
  const searchTerm = useSelector((state) => {
    console.log(state);
    return state.searchReducerCopy;

  });

  useEffect(() => {
  
  }, [searchTerm]);
  return (
    <div>
      <Navbar/>
      <Featured/>

      {/* if({searchTerm.length ===0}) {
          <Home/>
      }else(
         <ListitemSearchCopy/>
      )
       */}
       {
        searchTerm.length === 0?<Home/>:<ListitemSearchCopy/>
       };
      

<div>
  <div>

  </div>
</div>



    </div>
  );
}
