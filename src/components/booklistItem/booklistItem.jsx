import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CardGroup, Card, CardImg,  Row, Container } from 'reactstrap';
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
    <main className='books' >
    <section className="cards">
    
      <CardGroup>
        {collection.map((book, index) =>
          <Row md="2" >
          <Card style={{padding:0}} className='cardz'  key={index} onClick={() => viewBook(book.ID)}>    
                <CardImg src={book.image_url} alt={book.title} top width="100%" />
          </Card>
              </Row>
        )}
        </CardGroup>
    </section>
    </main>
  );
}

export default BookList;