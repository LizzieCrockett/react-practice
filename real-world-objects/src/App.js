import React from 'react';
import './App.css';
import EmailComponent from './components/EmailComponent';
import email_300 from './constants/email.js'


function App() {

  return (
    <div className="app">
      <EmailComponent email={email_300}/>
    </div>
  );
}

export default App;
