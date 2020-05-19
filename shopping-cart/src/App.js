import React from 'react';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import DisplayShelf from './components/DisplayShelf';

function App() {
  return (
    <div className="app">
      <DisplayShelf />
      <ShoppingCart />
    </div>
  );
}

export default App;
