import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat plus</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/16496339/pexels-photo-16496339/free-photo-of-a-dry-grass-hill-under-blue-sky-with-white-clouds.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          alt=''
        />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
