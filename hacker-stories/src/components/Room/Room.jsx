import React from 'react';

const Room = (props) => {

    const [isLit, setLit] = React.useState(true);
    const [roomTemp, setTemp] = React.useState(72);
    const brightness = isLit ? "lit" : "dark";

    return (
        <div className = {`room ${brightness}`}>
            the room is {isLit ? "lit" : "dark"} <br />
            the temperature is {roomTemp} <br />
            <button onClick={()=> setLit(!isLit)}>flip</button> <br />
            <button onClick={()=> setLit(true)}>ON</button> <br />
            <button onClick={()=> setLit(false)}>OFF</button> <br />
            <button onClick={()=> setTemp(roomTemp + 1)}>+</button> <br />
            <button onClick={()=> setTemp(roomTemp - 1)}>-</button>
        </div>
    )
}

export default Room;