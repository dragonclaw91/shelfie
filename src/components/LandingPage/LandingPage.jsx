import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button } from 'reactstrap';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className='landing' >
    <div className="container">
      <h2 className='loginHeader' >{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_10">
          <p>
          Shelfie is a book management app that gives you access
           to add, rate, remove, or view your entire book catalog from anywhere.
           Using Shelfie is fun and easy, allowing you to quickly find any book
               to add to your personal library.
          </p>

         
        </div>
        
        <div  className="grid-col grid-col_12">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button  onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
