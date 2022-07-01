import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import "./UserPage.css"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className='userPage' >
    <div className="container">
      <h1 className='welcome' >Welcome, {user.username}!</h1>
      <p>Your ID is: {user.id}</p>
      <h3>USER INSTRUCTIONS:</h3>
      <p>click the add book link at the top right of your screen then, to add a book type in the International Standard Book Number,
         which can be found on the back of your book into the search field 
         or input the books title author summary and book cover image url link
          into the approiate fields and
          click add book button to save the book to your computer.</p>
          <p>to view your collection simply click the view collection link on the top right of your screen.
            if no books have been added the display will show an empty bookshelf.
            to view the details of the book's summary simply click the book you wish to view.
            Once the book is being viewed you can click the stars beneath the book to rate a peticular book.
            if the book has no image one may be added to it by typing a image url into the search field.
            Deleteeing a book is as simple as hitting the delete button.</p>
      <LogOutButton className="btn" />
    </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
