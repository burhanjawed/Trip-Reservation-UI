import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <span className='navbar__logo'>Tripable</span>
        <div className='navbar__items'>
          <button className='navbar__items__button'>Register</button>
          <button className='navbar__items__button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
