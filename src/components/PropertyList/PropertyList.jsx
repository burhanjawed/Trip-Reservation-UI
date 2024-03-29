import React from 'react';
import './PropertyList.scss';

const PropetyList = () => {
  return (
    <div className='pList'>
      <div className='pList__item'>
        <img
          src='https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
          alt='Property-1'
          className='pList__item__img'
        />
        <div className='pList__item__titles'>
          <h1>Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className='pList__item'>
        <img
          src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
          alt='Property-2'
          className='pList__item__img'
        />
        <div className='pList__item__titles'>
          <h1>Apartments</h1>
          <h2>2331 Apartments</h2>
        </div>
      </div>
      <div className='pList__item'>
        <img
          src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
          alt='Property-3'
          className='pList__item__img'
        />
        <div className='pList__item__titles'>
          <h1>Resorts</h1>
          <h2>2331 Resorts</h2>
        </div>
      </div>
      <div className='pList__item'>
        <img
          src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg'
          alt='Property-4'
          className='pList__item__img'
        />
        <div className='pList__item__titles'>
          <h1>Villas</h1>
          <h2>2331 Villas</h2>
        </div>
      </div>
      <div className='pList__item'>
        <img
          src='https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
          alt='Property-5'
          className='pList__item__img'
        />
        <div className='pList__item__titles'>
          <h1>Cabins</h1>
          <h2>2331 Cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropetyList;
