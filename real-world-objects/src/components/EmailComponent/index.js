import React from 'react';
import './EmailComponent.css';

const EmailComponent = ({ email }) => {
    return (
        <div className="wrapper">
            <div className="checkbox"></div>
            <div className="logo">{email.logo}</div>
            <div className="content">
                <div className="topline">
                    <span className="sender">{email.sender}</span>
                    <span className="subject">{email.subject}</span>
                    <span className="date">{email.date}</span>
                </div>
                <div className="previewtext">{email.content}</div>
            </div>
        </div>
    )
}

export default EmailComponent;