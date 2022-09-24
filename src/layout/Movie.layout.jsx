import React, { Component } from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';

const MovielayoutHoc = () => ({ ...props }) => {
  return (
    <div>
      <MovieNavbar></MovieNavbar>
        <Component { ...props }></Component>
        <div>Footer</div> 
    </div>
  )
}

export default MovielayoutHoc;