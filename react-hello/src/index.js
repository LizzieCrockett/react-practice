import React from 'react';
import ReactDOM from 'react-dom';


const HelloWorld = () => {
    return (
        <div>
            <Hello /> <World />!!!{-1+2}! 
        </div>
    )
}

const Hello = () => {
    return (
        <span>Hello</span>
    )
}

const World = () => {
    return (
        <span>World</span>
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root')
);