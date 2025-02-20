// App.js
import React, { useState } from 'react';
import './App.css';
import RegisterNow from './Components/RegisterNow';
import SignIn from './Components/SignIn';
import ImageAlign from './Components/ImageAlign';
import RegisterPopup from './Components/RegisterPopup';
import LoginPopup from './Components/LoginPopup';

function App() {
 
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen1, setPopupOpen1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
   
  const handleCloseClick = () => {
    setShowPopup(false);
  };

    const handleClick = () => {
      setPopupOpen(true); // Set the state to open the popup
    };
    
    const handleClose = () => {
      setPopupOpen(false); // Set the state to close the popup
    };

  const handleClick1 = () => {
    setPopupOpen1(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your registration logic here
    console.log('Register button clicked');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
        <h1>SwipTory</h1>
        <button onClick={handleClick} className="button">
        Register Now
      </button>
      {isPopupOpen && <RegisterPopup />} 
      {showPopup && (
        <RegisterPopup onClose={handleCloseClick} />
      )}
      {/* Render RegisterPopup if isPopupOpen is true */}
        <button onClick={handleClick1} className="button1">
        SignIn
        </button>
        {isPopupOpen1 && <LoginPopup />} 
        </div>
      </header>
      <main>
        <ImageAlign />
        <section>
          <h2>Top Stories About food</h2>
          <p >No stories Available</p>
        </section>
        <section>
          <h2 className='gg'>Top Stories About Medical</h2>
          <p>No stories Available</p>
        </section>
      </main>
    </div>
  );
}

export default App;