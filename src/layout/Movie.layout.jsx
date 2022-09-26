import React from 'react';
import MovieNavbar from '../components/Navbar/MovieNavbar.Component';



const MovielayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <MovieNavbar></MovieNavbar>
        <Component { ...props }></Component>
        <div>Footer</div> 
    </div>
  )
}

export default MovielayoutHoc;