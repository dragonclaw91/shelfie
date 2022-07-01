import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating'
import "./details.css"
import { Button,Input } from 'reactstrap'



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
    console.log(bookList);

    let bookId = params.bookId;
    let book = bookList.find(book => book.ID === Number(bookId));

    console.log(book)

    function rateBook(rating) {

        dispatch({ type: 'RATINGS', payload: { rating: rating / 20, id: book.ID } })
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
        <div className='details' >
            <>
            <br/>
            <div className="details_header" >
                <h2>{book.title}</h2>
                </div>
                <br/>
                <div className='addImage' >
                <div className='rating' >
                <Rating onClick={rateBook}
                    ratingValue={rating}
                    fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']} />
                    </div>
                <Input  value={image} onChange={() => setImage(event.target.value)} placeholder="add image url" ></Input>
                
                <Button className="add" color='success' onClick={addImage}>add image</Button>
                </div>
                <br/>
                <img className='viewImage' src={book.image_url} alt={book.title} />
                <Button class="btn-lg" color='danger' className='delete' onClick={() => deleteBook(book)} >delete</Button>
                    <div className='summary'>
                <h3> Summary: </h3><br />
                <p> {book.summary}</p>
                </div>
            </>
        </div>
    )
}


export default DisplayBooks