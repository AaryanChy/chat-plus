import React from "react";

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Message....' />
      <div className='send'>
        <img src='attachments.png' alt='' />
        <input type='file' style={{ display: "none" }} id='file' />
        <label htmlFor='file'>
          <img src='chatUpload.png' alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
