import React from 'react'
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultlayoutHoc = (Component) => ({ ...props }) => {
  return (
    <div>
      <Navbar></Navbar>
       <Component { ...props }></Component> 
       <div>Footer</div>
    </div>
  )
}

export default DefaultlayoutHoc;