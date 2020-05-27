import React from 'react';
import './App.css';
import features from './constants/features.js';
import people from './constants/people.js';
import TrelloBox from './components/TrelloBox';


function App() {
  return (
    <div className="App">
      <TrelloBox data={features} title="Features" />
      <TrelloBox data={people} title="People We Like" />
    </div>
  );
}

export default App;
