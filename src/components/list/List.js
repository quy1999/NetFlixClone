import React, { useRef, useState } from 'react'
import './list.scss'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ListItem from '../../listItem/ListItem'
import { useEffect } from 'react'
export default function List({nameGernes,idGernes}) {
 //Call api danh sách phim
  const [popular, setPopular] = useState([]); //Khai báo lưu movie từ Api
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=bd30798f95edf3a68e5338d495234cb1&with_genres=${idGernes}`
  useEffect( ()=>{
    fetchPopular();
  },[]);
  
  
  const fetchPopular = async () =>{
    const data = await fetch(url); //gọi api
    const movies = await data.json(); //lấy json
    console.log(movies);
    setPopular(movies.results); //movie laf json
  }
 //Call api thể loại phim 



  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50; //tọa độ x.y kích thước của nít trái phải
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 0);
      listRef.current.style.transform = `translateX(${200 + distance}px)`;
    }
    if (direction === "right" && slideNumber < popular.length) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-150 + distance}px)`;
    }
  };
   

    
  
  return (
    <div className='List'>
<span className='listTitle '>{nameGernes}</span>
<div className='wrapper'>
<AiOutlineArrowLeft className='sliderArrow' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}></AiOutlineArrowLeft> 
<div className='container' ref={listRef}> 
{popular.map((movie,i) =>{
  return <ListItem  index={i} movie={movie}  ></ListItem>
})}
{/* <ListItem index={0}/>
<ListItem index={1} ></ListItem>
<ListItem index={2}></ListItem>
<ListItem index={3}></ListItem>
<ListItem index={4}></ListItem>
<ListItem index={5}></ListItem>
<ListItem index={6}></ListItem>
<ListItem index={7}></ListItem>
<ListItem index={8}></ListItem>
<ListItem index={9}></ListItem>
<ListItem index={10}></ListItem>
<ListItem index={11}></ListItem> */}



</div>
<AiOutlineArrowRight className='sliderArrowz'  onClick={() => handleClick("right")}></AiOutlineArrowRight>

</div>


    </div>
  )

  }