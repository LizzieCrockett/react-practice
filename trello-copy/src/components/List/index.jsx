import React from 'react';
import './List.css';
import ListItem from '../ListItem';

const List = ({ data }) => {
    return (
        <ul className='list'>
            {data.map(item => (
                <ListItem key={item.id} name={item.name} />
            ))}
        </ul>
    )
}

export default List;