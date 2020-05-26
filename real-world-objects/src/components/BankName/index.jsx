import React from 'react';
import './BankName.css';
  

const BankName = ({ userInfo }) => {
    return (
        <div className="banklogo">{userInfo.bank_name}</div>
    )
}



export default BankName;