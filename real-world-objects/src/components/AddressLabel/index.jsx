import React from 'react';
import './AddressLabel.css'

const AddressLabel = ({ address }) => {
    return (
        <div className="address">
            <div className="name">{address.name}</div>
            <div className="streetaddress">{address.street}</div>
            <div className="town">{address.town}</div>
            <div className="postcode">{address.postcode}</div>
        </div>
    )
}



export default AddressLabel;