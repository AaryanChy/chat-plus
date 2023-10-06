import React from "react";

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/14395818/pexels-photo-14395818.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
          alt=''
        />
        <span className='title'>Jane</span>
      </div>
      <hr />
    </div>
  );
};

export default Search;
