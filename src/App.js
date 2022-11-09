import logo from "./logo.svg";
import "./App.scss";
import Watch from "./pages/watchs/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { FirebaseApp } from "firebase/app";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/list/List";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div className="App">
      <Search></Search>
    </div>
  );
}

export default App;
