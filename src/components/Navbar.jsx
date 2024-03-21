import React from 'react'
import './Navbar.css'
import travel from '..//assets/travel.jpg'
import { RiAccountCircleFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div>
    <nav>
   
        <div className='brand'>
            <div className='logo'>
        <a href="#">
            <img src={travel} alt="" />
          </a></div>
          <div className='brand-name'>
            <h1>JourneyGlobe</h1>
          </div></div>
          <div className='nav-links'>
            <ul>
              <li>Flights</li>
              {/* <a href="/flight">Flights</a>
              <a href="">Hotels</a>
              <a href="">Contact</a> */}
              <li>Hotels</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='searchbar'>
           <input type="text"  placeholder = 'search Destionation' id="" />
           <div class="search">
          <button>Search</button>
          </div>
          </div>
          {/* <div class="search">
          <button>Search</button>
          </div> */}

          <div className='account'>
            <RiAccountCircleFill /><p>sign in</p></div>
    </nav>
    </div>
  )
}

export default Navbar