import React from 'react';
import Count from '../Count';


const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        <Count count={count} />
    </span>
);

export default RetweetButton;