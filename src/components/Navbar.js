import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Reading List</h1>
      <p>You currently have {books.length}</p>
    </div>
  );
};

export default Navbar;
