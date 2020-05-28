import React from 'react';
import { useState } from 'react';


const RandomList = () => {
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.random() * 100
        }])
    }
    return (
        <>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            )
            )}
        </ul> 
        </>
    )
}

export default RandomList;