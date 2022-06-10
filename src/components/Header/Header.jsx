import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faChampagneGlasses,
  faPerson,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__list'>
          <div className='header__list__item active'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <span>Stays</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faPlane} className='header__icon' />
            <span>Flights</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faCar} className='header__icon' />
            <span>Car Rentals</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon
              icon={faChampagneGlasses}
              className='header__icon'
            />
            <span>Attractions</span>
          </div>
          <div className='header__list__item'>
            <FontAwesomeIcon icon={faTaxi} className='header__icon' />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className='header__title'>A lifetime of discounts? It's genius.</h1>
        <p className='header__description'>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Tripable account
        </p>
        <button className='header__btn'>Sign In / Register</button>
        <div className='header__search'>
          <div className='header__search__item'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='header__search__input'
            />
          </div>
          <div className='header__search__item'>
            <FontAwesomeIcon icon={faCalendarDays} className='header__icon' />
            <span className='header__search__text'>date to date</span>
          </div>
          <div className='header__search__item'>
            <FontAwesomeIcon icon={faPerson} className='header__icon' />
            <span className='header__search__text'>
              2 adults 2 children 1 room
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
