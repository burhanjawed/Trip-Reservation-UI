import React from 'react';
import {
  Featured,
  FeaturedProperties,
  Header,
  Navbar,
  PropertyList,
} from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='home__container'>
        <Featured />
        <h1 className='home__title'>Browse by property type</h1>
        <PropertyList />
        <h1 className='home__title'>Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
