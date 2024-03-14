import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><Link to={"/blog"}>Blogs</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/home"}>Home</Link></li>
            
            
        </ol>
    </div>
    
  )
}

export default Navbar
