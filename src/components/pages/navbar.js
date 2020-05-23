import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class navbar extends Component {
  render() {
  return (
       <nav className="navbar">
      <div className="logo">
           XD
      </div>

     <ul className="navbar__list ">
    
     <li className="navbar__item">
         <Link to="/">Companies</Link>
     </li>

       <li className="navbar__item">
         <Link to="/">Products</Link>
       </li>

       <li className="navbar__item">
         <Link to="/">LOGIN</Link>
       </li>

       <li className="navbar__item">
         <Link to="/">Registered</Link>
       </li>
       
      <i className="fas fa-ellipsis-v"></i>

     </ul>
   </nav>
  );
}
}

export default navbar;
