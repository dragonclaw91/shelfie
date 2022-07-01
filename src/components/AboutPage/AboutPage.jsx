import React from 'react';
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <img className='picture' src='https://lh3.googleusercontent.com/9AY88ywpfrmSI6Z6WkMzqzdrLtn5mm8H0FcJ7yy4hBcpxmlME7QNuK5xH4WKx8FdGY9T7kyN-PSjnrdBnWvUhrD3AwPEfFWAabT0ajbZPHcmxe91V4mevu9T7-WhtsHPlI01DPD6=w2400'/>
        <h1>About The Creator: </h1>
        <p className='aboutSection' >
          My name is David Brown I live in Fargo, Nd. I am a student at Emerging Digital Academy, Lover of anime, friend to all things furry, and of course a self proclaimed bookworm and as a connoisseur of literature I have many variety of books in a variety of mediums(ebooks,auidoBooks,hardcovers, and paperback).
          I noticed that the while there exists a way to catalog ebooks and auido books there was very limited ways to catalog physical copies of books.
          That's why I created Shelfie while the road to the creation of Shelfie hasn't always been easy or straight forward. I found both the process to be extremly rewarding in it's own way. While alowing me solve a problem that has vexed my of my fellow bookworms.   
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
