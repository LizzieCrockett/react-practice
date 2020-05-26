import React from 'react';
import './App.css';

const ErrorBox = ({ children }) => {
  return (
    <div className="errorbox">
      <h1>{children}</h1>
    </div>
  )
}

const FirstChildOnly = ({ children }) => {
  let item = children[0];
  return (
    <p>{item}</p>
  )
}

const LastChildOnly = ({ children }) => {
  let item = children[3];
  return (
    <p>{item}</p>
  )
}




function App() {
  return (
    <LastChildOnly><p>4</p><p>3</p><p>2</p><p>1</p></LastChildOnly>
  );
}

export default App;
