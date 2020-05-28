import React from 'react';

const OneTimeButton = () => {
    const [clicked, setClicked] = React.useState(false);
    const handleClick = () => {
        setClicked(true);
    }
    return (
        <button onClick={handleClick} disabled={clicked}>You can only click me once</button>
    )
}

export default OneTimeButton;