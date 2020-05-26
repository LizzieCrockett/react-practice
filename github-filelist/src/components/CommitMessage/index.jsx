import React from 'react';
import './CommitMessage.css'

const CommitMessage = ({ commit }) => {
    return (
        <span className="commit-message">
            {commit.message}
        </span>
    )
}

export default CommitMessage;