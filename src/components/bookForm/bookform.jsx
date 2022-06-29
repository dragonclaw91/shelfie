import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import "./bookform.css"





function AddBook() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('')

    const history = useHistory()
    const user = useSelector(store => store.user);



console.log(user)


    const findBook = (event) => {
        event.preventDefault();
        dispatch({ type: 'FETCH_BOOK', payload: { search: Number(isbn), id: user.id } })
        history.push(`/collection`)
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_COLLECTION' });
    }, []);

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
        <div className='header' >
            <h1>welcome user</h1>
            <h1>find book</h1>
            </div>
        <Form>
            <Row>
                <Col md={4} >
            <FormGroup  >
            <Label htmlFor="isbn" >ISBN Number: </Label>
                <Input id="isbn" value={isbn} onChange={() => setIsbn(event.target.value)} placeholder='search'  ></Input>
                <Button color="success" onClick={findBook} >find book</Button>
                </FormGroup>
                </Col>
                </Row>
                <div className='manual' >
            <h4>add manually</h4>
<FormGroup>
    <Row>
        <Col md={4} >
<Label htmlFor="title" >Title: </Label>
            <Input id="title" placeholder="title" value={title} onChange={() => setTitle(event.target.value)}></Input>
            <Label htmlFor="author" >Author: </Label>
            <Input id="author" placeholder="author" value={author} onChange={() => setAuthor(event.target.value)}></Input>
            <Label htmlFor="summary" >Summary: </Label>
            <Input id="summary" type="textarea" placeholder="summary" value={summary} onChange={() => setSummary(event.target.value)}></Input>
            <Label htmlFor="image-url" >Image URL: </Label>
            <Input id="image-url" placeholder="image url" value={bookCover} onChange={() => setBookCover(event.target.value)}></Input>
            <Button color="success" onClick={() => {addManually()}}>add book</Button>
            </Col>
            </Row>
            </FormGroup>
            </div>
            </Form>
        </>
    )
}


export default AddBook