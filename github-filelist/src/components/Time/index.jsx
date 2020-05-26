import React from 'react';
import moment from 'moment';
import './Time.css';



const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="age">
            {timeString}
        </span>
    )
}


export default Time;