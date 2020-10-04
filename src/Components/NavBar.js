
import React, {useState} from 'react'
import Button from './Button';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown'
import './Navbar.css'
import { MenuItems } from './MenuItems';




const NavBar = () =>{
  const[click, setClick]=useState(false)
  const [dropdown, setDropdown]=useState(false)

  const onIconClik=()=>setClick(!click)
  const changeMobileView=()=>setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

     
     return(
        <>
        <nav data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className='navbar'>
          <Link to ='/' className='navbar-logo'>
          <h1 data-aos="zoom-out-up" className='navbar-logo'>goToChile</h1>
          </Link>
          <div className='menu-icon' onClick={onIconClik}>
            <i  className={click? 'fas fa-times': 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li  data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className='nav-item'>
                <Link to='/' className='nav-links' onClick={changeMobileView}>
                  Home
                </Link>
            </li>
            <li data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" className='nav-item' 
              onMouseEnter={onMouseEnter} 
              onMouseLeave={onMouseLeave}>
                <Link to='/Packages' className='nav-links'
                 onClick={changeMobileView}>
                  Packages <i  data-aos="zoom-in-left"  className='fas fa-caret-down'/>
                  {dropdown && <Dropdown />}
                </Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/Tours' className='nav-links' onClick={changeMobileView}>
                  Tours
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={changeMobileView}>
                  About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={changeMobileView}>
                 Contact Us
                </Link>
            </li>
          </ul>
        </nav>
        
      </>
        


    )
}

export default NavBar;