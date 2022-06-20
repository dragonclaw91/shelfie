import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function BookList() {
  const bookList = useSelector(store => store.bookList);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_BOOK' });
}, []);


  return (
    <section>
      <h2>CURRENT BOOKLIST</h2>
      Current Book: {currentBook.title ? currentBook.title : 'None Selected'}
      <ul>
        {bookList.map((book, index) =>
          <li key={index}>{book.author}
          <img>image to be added later</img>
          </li>
        )}
      </ul>
    </section>
  );
}

export default BookList;