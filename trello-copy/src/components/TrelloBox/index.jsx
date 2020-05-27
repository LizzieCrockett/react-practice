import React from 'react';
import './TrelloBox.css';
import ListTitle from '../ListTitle';
import MoreButton from '../MoreButton';
import List from '../List';
import AddACard from '../AddACard';


const TrelloBox = ({ data, title }) => {
    return (
        <div className='wrapper'>
            <div className='top'>
                <ListTitle title={title} />
                <MoreButton />
            </div>
            <div className='middle'>
                <List data={data} />
            </div>
            <div className='bottom'>
                <AddACard />
            </div>
        </div>
    )
}

export default TrelloBox;