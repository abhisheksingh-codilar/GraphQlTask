import React, { Component } from 'react'
import './Navbar.css'

export default class  extends Component {
  render() {
    return (
      <>
     <div class="navbar">

 <div class="nav-header">
   {/* <div class="nav-logo">
     <a href="#">
       <img src="logo.png" width="100px" alt="logo">
     </a>
   </div> */}
 </div>
  

 <input type="checkbox" id="nav-check"/>
 <div class="nav-btn">
   <label for="nav-check">
     <span></span>
     <span></span>
     <span></span>
   </label>
 </div>

 
 <div class="nav-links">
   <a href="#">Home</a>
   <a href="#">About</a>
   <a href="#">Project</a>
   <a href="#">Services</a>
   <a href="#">Contact</a>
   <button class="loginBtn">Login</button>
 </div>

</div>
      </>
    )
  }
}
