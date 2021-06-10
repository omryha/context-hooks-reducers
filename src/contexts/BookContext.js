import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    // Get books from Local Storage when initializing
    return localStorage.getItem('books')
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
    // sessionStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
