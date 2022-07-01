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
        <p className='aboutSection' >About The Creator: 
          My name is david Brown I live in Fargo, Nd. I am a student at Emerging Digital Academy, Lover of anime, friend to all things furry, and of course a self proclaimed bookworm and as a connoisseur of literature I have many variety of books in a variety of mediums(ebooks,auidoBooks,hardcovers, and paperback).
          I noticed that the while there exists a way to catalog ebooks and auido books there was very limited ways to catalog physical copies of books.
          That's why I created Shelfie while the road to the creation of Shelfie hasn't always been easy or straight forward. I found both the process to be extremly rewarding in it's own way. While alowing me solve a problem that has vexed my of my fellow bookworms.   
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
