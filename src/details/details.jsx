import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'



function DisplayBooks() {

const history = useHistory()
    const [image, setImage] = useState("")
    const [rating, setRating] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'FETCH_COLLECTION' });
    }, []);
    let bookList = useSelector(store => store.collectionReducer);



    let params = useParams();
    console.log('gdasagdsa',bookList);

    let bookId = params.bookId;
    let book = bookList.find(book => book.ID === Number(bookId));

    console.log(book)

    function rateBook(rating) {
       
        dispatch({ type: 'RATINGS', payload: { rating: rating/20, id: book.ID } })
        console.log(rating)
    }



    function deleteBook(book) {
        dispatch({ type: 'DELETE_BOOK', payload: book.ID })
        history.push("/collection")
    }

    if (!book) return <h2>Invalid Book Id</h2>


    function addImage() {
        dispatch({ type: 'ADD_IMAGE', payload: { image: image, id: book.ID } })
    }



    return (
        <>
            <h2>Details Page</h2>
            <h3>Book Title: </h3>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt={book.title} />
            <input value={image} onChange={() => setImage(event.target.value)} placeholder="add image url" ></input>
            <button onClick={addImage}>add image</button>
            <h3> Summary: </h3><br />
            <p> {book.summary}</p>
            <button onClick={() => deleteBook(book)} >delete</button>
            <Rating     onClick={rateBook}
  ratingValue={rating}
  fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']} />
        </>
    )
}


export default DisplayBooks