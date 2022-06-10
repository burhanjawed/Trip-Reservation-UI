import React from 'react';
import './FeaturedProperties.scss';

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fp__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt='Featured Property 1'
          className='fp__img'
        />
        <span className='fp__item__name'>Aparthotel Stare Miasto</span>
        <span className='fp__item__city'>Madrid</span>
        <span className='fp__item__price'>Starting from $120</span>
        <div className='fp__item__rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fp__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt='Featured Property 2'
          className='fp__img'
        />
        <span className='fp__item__name'>Aparthotel Stare Miasto</span>
        <span className='fp__item__city'>Madrid</span>
        <span className='fp__item__price'>Starting from $120</span>
        <div className='fp__item__rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fp__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt='Featured Property 3'
          className='fp__img'
        />
        <span className='fp__item__name'>Aparthotel Stare Miasto</span>
        <span className='fp__item__city'>Madrid</span>
        <span className='fp__item__price'>Starting from $120</span>
        <div className='fp__item__rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fp__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt='Featured Property 4'
          className='fp__img'
        />
        <span className='fp__item__name'>Aparthotel Stare Miasto</span>
        <span className='fp__item__city'>Madrid</span>
        <span className='fp__item__price'>Starting from $120</span>
        <div className='fp__item__rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
