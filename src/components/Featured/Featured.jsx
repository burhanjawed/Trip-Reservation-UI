import React from 'react';
import './Featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
          alt='Featured-1'
          className='featured__item__img'
        />
        <div className='featured__item__titles'>
          <h1>Dublin</h1>
          <h1>123 Properties</h1>
        </div>
      </div>
      <div className='featured__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
          alt='Featured-2'
          className='featured__item__img'
        />
        <div className='featured__item__titles'>
          <h1>Austin</h1>
          <h1>532 Properties</h1>
        </div>
      </div>
      <div className='featured__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
          alt='Featured-3'
          className='featured__item__img'
        />
        <div className='featured__item__titles'>
          <h1>Reno</h1>
          <h1>533 Properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
