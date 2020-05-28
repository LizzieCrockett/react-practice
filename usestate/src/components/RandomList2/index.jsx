import React from 'react';

const RandomList2 = () => {
    const [numbers, setNumbers] = React.useState([]);

    const addRandom = () => {
        setNumbers([...numbers,
        {
            id: numbers.length,
            value: Math.floor(Math.random() * 100)
        }
        ])
    }

    // numbers.push(Math.floor(Math.random() * 100))??

    const randomNumberList =  Math.floor(Math.random() * 100)  

        return (
            <div>
                <button onClick={addRandom}>Random generator</button>
                <p> {randomNumberList}</p>
                <ul>
                    {numbers.map(number => (
                        <li key={number.id}>{number.value}</li>
                    ))}
                </ul>
            </div>
        )
}

export default RandomList2;