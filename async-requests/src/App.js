import React from 'react';
import './App.css';
import RedditAxios from './components/RedditAxios';

function App() {
  return (
    <div className="App">
      <RedditAxios subreddit="reactjs" />
    </div>
  );
}

export default App;
