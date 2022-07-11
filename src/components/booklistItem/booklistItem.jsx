import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CardGroup, Card, CardImg,  Row, Container, Button } from 'reactstrap';
import "./booklistItem.css"



function BookList() {
  // grabbing all the books in the reducer for display
  const collection = useSelector(store => store.collectionReducer);
  const dispatch = useDispatch();
  const history = useHistory();

console.log(collection)

// grabbing the useers collection on page load
  useEffect(() => {
    dispatch({ type: 'FETCH_COLLECTION' });
}, []);



// alowing user to clik a book and view its details
function viewBook(book){
  console.log(book)
  history.push(`/details/${book}`)
}
// allowing for order by ratings
function orderByRatings(){
  dispatch({type: 'FETCH_COLLECTION_RATING'})
}
// order by title
function orderByTitle(){
  dispatch({type: 'FETCH_COLLECTION_TITLE'})
}
// ordering by author
function orderByAuthor(){
  dispatch({type: 'FETCH_COLLECTION'})
}

  return (
    <>
   
    <div className='headerBookListItem' >
    <Row xs={3} >
    <Button onClick={orderByTitle}>Order by Title</Button>
    <Button onClick={orderByAuthor}  >Order by Author</Button>
    <Button onClick={orderByRatings} >Order by Rating</Button>
    </Row>
    </div>
    <div className='books'>

      
      <section className="cards">

        <CardGroup>
          {collection.map((book, index) => <Row md="2">
            <Card style={{ padding: 0 }} className='cardz' key={index} onClick={() => viewBook(book.ID)}>
              <CardImg src={book.image_url} alt={book.title} top width="100%" />
            </Card>
          </Row>
          )}
        </CardGroup>
      </section>
    </div>
    </>
  );
}

export default BookList;