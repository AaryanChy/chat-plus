import React from "react";
import Sidebar from "../components/Sidebar";
import Chatbox from "../components/Chatbox";
import "./home.scss";
const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};

export default Home;
