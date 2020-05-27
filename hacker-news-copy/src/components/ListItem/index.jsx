import React from 'react';

const ListItem = ({ ...item }) => {
    return (
        <li className='list-item' key={item.id}>
            icon |
            <a href={`${item.url}`} target="_blank">{item.title}</a> |
            ({item.url}) |
            {item.points} points |
            by {item.author} |
            flag |
            hide |
            {item.comments} comments |
            instapaper |
            save to pocket
        </li>
    )
}

export default ListItem;