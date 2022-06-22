import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';




function AddBook() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('')

    const history = useHistory()
    const user = useSelector(store => store.user);




    const findBook = (event) => {
        event.preventDefault();
        dispatch({ type: 'FETCH_BOOK', payload: { search: Number(isbn), id: user.id } })
        history.push("/collection")
    }

    function addManually() {
        dispatch({
            type: 'MANUAL_ENTRY', payload:
            {
                title: title,
                id: user.id,
                author: author,
                summary: summary,
                bookCover: bookCover
            }
        })
        history.push("/collection")
    }


    return (
        <>
            <h1>welcome user</h1>
            <h1>find book</h1>
            <form onSubmit={findBook} >
                <input value={isbn} onChange={() => setIsbn(event.target.value)} placeholder='search'  ></input>
                <button>find book</button>
            </form>
            <h4>add manually</h4>

            <input placeholder="title" value={title} onChange={() => setTitle(event.target.value)}></input>
            <input placeholder="author" value={author} onChange={() => setAuthor(event.target.value)}></input>
            <textarea placeholder="summary" value={summary} onChange={() => setSummary(event.target.value)}></textarea>
            <input placeholder="image url" value={bookCover} onChange={() => setBookCover(event.target.value)}></input>
            <button onClick={() => {addManually()}}>add book</button>
        </>
    )
}


export default AddBook