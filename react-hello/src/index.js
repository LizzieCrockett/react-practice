import React from 'react';
import ReactDOM from 'react-dom';


const HelloWorld = () => {
    return (
        <div>
            <Hello /> <World />!!!{-1+2}! 
            <SubmitButton />
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

const SubmitButton = () => {
    const buttonLabel = "Submit";
    return (
        <button>{buttonLabel}</button>
    )
}

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#root')
);