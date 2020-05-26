import React from 'react';
import './App.css';
import CreditCardComponent from './components/CreditCardComponent';

const user_119376 = {
  name: "MR WILLIAM E J BIRCH",
  expiry: '08/22',
  card_number: "1234 5678 8765 4321",
  bank_name: 'Big Bank Inc.'
}

function App() {
 

  return (
    <div className="app">
      <CreditCardComponent userInfo={user_119376} />
    </div>
  );
}

export default App;
