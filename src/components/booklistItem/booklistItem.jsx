import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CardGroup, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import "./booklistItem.css"



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
    <section className='container'>
      <h2>CURRENT BOOKLIST</h2>
        {collection.map((book, index) =>
        <CardGroup class = "row" >
          <Card  key={index} onClick={() => viewBook(book.ID)}>
          <><CardBody>
                  <CardTitle>
                    {book.author}
                  </CardTitle>
                </CardBody>
                <CardImg src={book.image_url} alt={book.title} top width="100%"  /></>
          </Card>
        </CardGroup>
        
        )}
    </section>
  );
}

export default BookList;