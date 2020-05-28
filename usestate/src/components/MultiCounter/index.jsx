import React from 'react';

const MultiCounter = () => {
    const [counts, setCounts] = React.useState([{
        countA: 1, countB: 2
    }]);
    const increaseA = () => {
        setCounts(counts => ({ ...counts, countA: counts.countA + 1 }))
    };
    const increaseB = () => {
        setCounts({ ...counts, countB: counts.countB + 1 })
    };
    const badIncreaseA = () => (
        setCounts({
            countA: counts.countA + 1
        })
    );

    return (
        <div className="randombuttons">
            <button onClick={increaseA}>Increase Count A</button>
            <p>Count A:{counts.countA}</p>
            <button onClick={increaseB}>Increase Count B</button>
            <p>Count B:{counts.countB}</p>
            <button onClick={badIncreaseA}>Increase Count A badly</button>
            <p>Count A:{counts.countA}</p>
        </div>
    )
}

export default MultiCounter;