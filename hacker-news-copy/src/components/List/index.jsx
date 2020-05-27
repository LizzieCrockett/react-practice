import React from 'react';
import ListItem from '../ListItem';

const List = ({ data }) => {
    return (
        <ul className='list'>
            {data.map(item => (
                <ListItem {...item} />
            ))}
        </ul>
    )
}

export default List;