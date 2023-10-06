import React from "react";
import Message from "./Message";
import Messages from "./Messages";
import Input from "./Input";

const Chatbox = () => {
  return (
    <div className='chatBox'>
      <div className='chatInfo'>
        <span>Jane</span>
        <div className='chatIcons'>
          <img src='call.png' alt='' />
          <img src='video-camera.png' alt='' />
          <img src='ellipsis.png' alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chatbox;
