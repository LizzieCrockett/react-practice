import React from 'react';
import './Validity.css';

const Validity = ({ userInfo }) => {
    return (
        <div className="validity">
            <div className="validthru">
                VALID <br />THRU
            </div>
            <div className="expirydate">
                {userInfo.expiry}
            </div>
        </div>
    )
}



export default Validity;