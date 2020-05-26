import React from 'react';
import './LongNumber.css';

const LongNumber = ({ userInfo }) => {
    return (
        <div className="fullnumber">
            <div className="longnumber">
                {userInfo.card_number}
            </div>
            <div id="littlenumber">
                1234
            </div>
        </div>
    )
}

export default LongNumber;