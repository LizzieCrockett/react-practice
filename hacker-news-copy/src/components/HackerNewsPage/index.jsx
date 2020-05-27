import React from 'react';
import List from '../List';
import TitleBar from '../TitleBar';


const HackerNewsPage = ({ data }) => {
    return (
        <div id='wrapper'>
            <TitleBar />
            <List data={data} />
        </div>
    )
}

export default HackerNewsPage;