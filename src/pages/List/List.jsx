import React from 'react';
import { Navbar, Header } from '../../components';
import './List.scss';

const List = () => {
  return (
    <>
      <Navbar />
      <Header type={'list'} />
      <div>Hotel List</div>
    </>
  );
};

export default List;
