import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">GRAVITY</h1>
      <div className="forms">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}
export default App;


/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import PublicBoard from './PublicBoard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">GRAVITY</h1>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/publicboard" element={<PublicBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import PublicBoard from './PublicBoard';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    // In a real app, you would call your backend API to verify the user's credentials
    // and retrieve their data, but for this example, we'll just set a dummy user object
    const user = {
      username: data.username,
      email: 'test@example.com',
      fullName: 'John Doe'
    };

    setUserData(user);
    setLoggedIn(true);
  };

  const handleSignup = (data) => {
    // Check if any of the input fields are empty
    if (!data.username || !data.email || !data.fullName) {
      // Display an error message or handle the error in some other way
      console.log('Please fill in all the fields.');
      return;
    }
  
    // If all the input fields are filled in, create a dummy user object
    const user = {
      username: data.username,
      email: data.email,
      fullName: data.fullName
    };
  
    // Update the user data state and set the user as logged in
    setUserData(user);
    setLoggedIn(true);
  };
  
  const handleLogout = () => {
    setUserData(null);
    setLoggedIn(false);
  };

  const handleFormError = () => {
    setError(true);
  };

  const handleCloseError = () => {
    setError(false);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <PublicBoard userData={userData} onLogout={handleLogout} />
      ) : (
        <div className="forms">
          <LoginForm onLogin={handleLogin} onError={handleFormError} />
          <SignupForm onSignup={handleSignup} onError={handleFormError} />
        </div>
      )}
      {error && (
        <div className="error-popup">
          <p className="error-message">Invalid username or password</p>
          <button className="close-button" onClick={handleCloseError}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

*/
