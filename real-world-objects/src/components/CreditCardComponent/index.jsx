import React from 'react';
import BankName from '../BankName';
import LongNumber from '../LongNumber';
import Validity from '../Validity';
import HolderName from '../HolderName';
import './CreditCard.css';




const CreditCardComponent = ({ userInfo }) => {
    return (
        <div className="wrapper">
            <BankName userInfo={userInfo} />
            <LongNumber userInfo={userInfo} />
            <Validity userInfo={userInfo} />
            <HolderName userInfo={userInfo} />
        </div>
    )
}



export default CreditCardComponent;