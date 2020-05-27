import React from 'react';
import './ListItem.css';

const ListItem = ({ key, name }) => {
    return (
        <li className='list-item' key={key}>
            {name}
        </li>
    )
}

export default ListItem;