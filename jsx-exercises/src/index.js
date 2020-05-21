import React from 'react';
import ReactDOM from 'react-dom';

const MyThing = () => {
    return (
        <div className='book'>
            <div className='title'>
                The Title
            </div>
            <div className='author'>
                The Author
            </div>
            <ul className='stats'>
                <li className='rating'>
                    5 stars
                </li>
                <li className='isbn'>
                    12-345678-910
                </li>
            </ul>
        </div>
    )
}

const Lines = () => {
    return (
        <div>
            Newline
            Test
        </div>
    )
}

const EmptyNewLines = () => {
    return (
        <div>
            Empty

            Newlines

            Here
        </div>
    )
}

const NonBreakingSpaces = () => {
    return (
        <div>
            &nbsp;Non-breaking
            &nbsp;Spaces&nbsp;
        </div>
    )
}

const SpacesAndMultipleLines = () => {
    return (
        <div>
            Line1
            {' '}
            Line2
        </div>
    )
}


const HelloWorld = () => {
    let username = false;
    return (
        <> {!username ?
            <>
                Not logged in
            </>
            :
            <>
                Hello, {username}
            </>
        }
        </>
    )
}

const HelloWorld2 = () => {
    let username = 'root';
    return (
        <>
            {username && `Hello, ${username}`}
            {!username && `Not logged in`}
        </>
    )
}

const testComponent = () => {
    return (
        <div>test</div>
    )
}

const Array = () => {
    return (
        [<div>one thing </div>, <div>two things</div>]
    )
}

/*const TwoExps = () => {
    let x;
    return (
        <>
        {x && 5; x && 7}
        </>
    )

}

const ReturninJS = () => {
    let thing = 'this is a thing';
    return (
        <div>{return thing}</div>
    )
}

const FunctionCall = () => {
    return (
        alert('hi')
    )
}*/

const QuotedString = () => {
    return (
        <>'this is a quote'</>
    )
}

const Table = () => {
    return (
        <table>
            <tbody>
                <tr>
                    <Data name='data1' />
                    <Data name='data2' />
                    <Data name='data3' />
                </tr>
            </tbody>
        </table>
    )
}

const Data = ({ name }) => {
    return (
        <td>{name}</td>
    )
}

ReactDOM.render(
    <Table />,
    document.querySelector("#root")
);