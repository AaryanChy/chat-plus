import React from "react";

const Login = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Chat plus</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />

          <button>Sign In</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
