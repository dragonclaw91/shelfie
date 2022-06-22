import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';


function BookList() {
  const collection = useSelector(store => store.collectionReducer);
  const dispatch = useDispatch();
  const history = useHistory();
 

  useEffect(() => {
    dispatch({ type: 'FETCH_COLLECTION' });
}, []);



function viewBook(book){
  history.push(`/details/${book.id}`)

}

  return (
    <section>
      <h2>CURRENT BOOKLIST</h2>
       <ul>
        {collection.map((book, index) =>
          <li key={index}>{book.author}
          <img src={book.image_url} onClick={() => viewBook(book)} />
          </li>
        )}
      </ul> 
    </section>
  );
}

export default BookList;