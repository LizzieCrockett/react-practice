import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './components/Tweet'
import './index.css';

const App = () => {
return (
<Tweet />
    )
}


ReactDOM.render(<App />,
    document.getElementById("root"));