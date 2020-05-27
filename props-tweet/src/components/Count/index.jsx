import React from 'react';

const Count = ({ count }) => {
    if (count > 0) {
        return (
            <span className="retweet-count">{count}</span>
        );
    } else {
        return null;
    }
}


export default Count;