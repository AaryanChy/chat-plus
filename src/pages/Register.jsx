import React from "react";

const Register = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Chat plus</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='text' placeholder='Display Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='file' id='file' style={{ display: "none" }} />
          <label htmlFor='file'>
            <img src='upload.png' alt='' className='upload-icon' />
            <span>Upload Image</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have a account? Login</p>
      </div>
    </div>
  );
};

export default Register;
