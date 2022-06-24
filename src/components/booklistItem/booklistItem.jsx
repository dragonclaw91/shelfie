import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';


function BookList() {
  const collection = useSelector(store => store.collectionReducer);
  const dispatch = useDispatch();
  const history = useHistory();

console.log(collection)

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLECTION' });
}, []);



function viewBook(book){
  console.log(book)
  history.push(`/details/${book}`)

}

  return (
    <section>
      <h2>CURRENT BOOKLIST</h2>
       <ul>
        {collection.map((book, index) =>
          <li key={index}>{book.author}
          <img src={book.image_url} alt={book.title} onClick={() => viewBook(book.ID)} />
          </li>
        )}
      </ul> 
    </section>
  );
}

export default BookList;