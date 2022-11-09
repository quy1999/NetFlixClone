import React from 'react'
import Featured from './components/featured/Featured'
import Navbar from './components/navbar/Navbar'
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div>
        <Navbar/>
        <Featured/>
        <Outlet/>
    </div>
  )
}
//Điều hướng