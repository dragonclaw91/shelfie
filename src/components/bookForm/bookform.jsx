import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';




function AddBook(){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setAuthor] = useState('');
    const [isbn,setIsbn] = useState('')

    const history = useHistory()
    const user = useSelector(store => store.user);
    console.log(user.id)



    const findBook = (event) => {
        event.preventDefault();
        dispatch({ type: 'FETCH_BOOK', payload: { search: Number(isbn), id: user.id } })
    }




    return(
        <>
        <h1>welcome user</h1>
        <h1>find book</h1>
        <form onSubmit={findBook} >
        <input value={isbn} onChange={() => setIsbn(event.target.value)} placeholder='search'  ></input>
        <button>submit</button>
        </form>
        <h4>add manually</h4>

        <input></input>
        <input></input>
        <input></input>
        <input></input>
        </>
    )
}


export default AddBook