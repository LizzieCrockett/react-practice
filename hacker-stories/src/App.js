import React from 'react';
import './App.css';

const getTitle = (title) => {
  return title;
}

const newSentence = (input) => {
  return (`This is a new sentence with ${input} in it`);
}

const newArray = ['this', 'is', 'an', 'array', 1, 2, 3]


function App() {
  return (
    <div className="App">
      <h1>Hello {getTitle('React')}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
      <h2>{newSentence(Math.ceil(Math.random() * 7))}</h2>
      <h3>{newArray}</h3>
    </div>
  );
}

export default App;
