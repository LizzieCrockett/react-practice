import React from 'react';
import './App.css';
import storieslist from './constants/storieslist.js';
import HackerNewsPage from './components/HackerNewsPage';

function App() {
  return (
    <div className="App">
      <HackerNewsPage data={storieslist} />
    </div>
  );
}

export default App;
