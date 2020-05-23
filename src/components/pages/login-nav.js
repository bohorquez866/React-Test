import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class navbarLogin extends Component {
  render() {
  return (
     <nav className="navbar navbar--login">

<figure className="sort-logo">
<img src={"./Assets/img/sort-sm.svg"} alt=""></img>
</figure>

   <div className="logo">
           XD
   </div>
   <i class="fas fa-user"></i>

     </nav>
  )
}
}

export default navbarLogin;
