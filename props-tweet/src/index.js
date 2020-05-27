import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import listOfTweets from './constants/listOfTweets.js'
import TweetList from './components/TweetList';



ReactDOM.render(<TweetList tweets={listOfTweets} />,
  document.querySelector('#root'));
