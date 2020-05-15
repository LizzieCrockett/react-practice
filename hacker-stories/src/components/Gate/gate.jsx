import React from 'react';

const Gate = ({isOpen}) => {
    return (
        isOpen ? <p>open</p> : <p>closed</p>
    )
}

export default Gate;