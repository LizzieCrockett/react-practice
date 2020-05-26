import React from 'react';
import './HolderName.css';

const HolderName = ({ userInfo }) => {
    return (
        <div className="cardholdername">
            {userInfo.name}
        </div>
    )
}


export default HolderName;