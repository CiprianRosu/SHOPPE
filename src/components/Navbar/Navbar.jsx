import React from 'react'
import './Navbar.css'
import logo from '../../assets/SHOPPE.png'
import {NavLink} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {FiShoppingCart} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {RxHamburgerMenu} from 'react-icons/rx';
 
const Navbar = () => {
  return (
    
      <div className='nav_wraper'>
        <div className='logo'>
          <NavLink to='home'><img src={logo} alt=""/></NavLink>
        </div>
      <div className='navigation'>
        <ul className='menu'> 
          <li className='nav_item'>
            <NavLink to='shop'>Shop</NavLink>
          </li>

          <li className='nav_item'>
            <NavLink to='blog'>Blog</NavLink>
          </li>

          <li className='nav_item'>
            <NavLink to='story'>Our story</NavLink>
          </li>

        </ul>
        <ul className='icons'>
          <li className='nav_icon'>
            <BiSearch/>
          </li>
          <li className='nav_icon sm'>
            <FiShoppingCart/>
          </li>
          <li className='nav_icon'>
            <BiUser/>
          </li>
          <li className='nav_icon sm bg'>
            <RxHamburgerMenu/>
          </li>
        </ul>

      </div>
        
    </div>
    
  )
}

export default Navbar