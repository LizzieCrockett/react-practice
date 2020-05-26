import React from 'react';
import BankName from '../BankName';
import LongNumber from '../LongNumber';
import Validity from '../Validity';
import HolderName from '../HolderName';
import './CreditCard.css';

const user = {
    name: "MR WILLIAM E J BIRCH",
    expiry: '08/19',
    card_number: "1234 5678 8765 4321",
    bank_name: 'Big Bank Inc.'
}


const CreditCardComponent = () => {
    return (
        <div className="wrapper">
            <BankName userInfo={user} />
            <LongNumber userInfo={user} />
            <Validity userInfo={user} />
            <HolderName userInfo={user} />
        </div>
    )
}



export default CreditCardComponent;