import React from 'react';
import Stamp from '../Stamp';
import AddressLabel from '../AddressLabel';
import './Envelope.css'



const Envelope = ({ fromPerson, toPerson }) => {
    return (
        <div className="wrapper">
            <div className="topline">
                <AddressLabel address={senderAddress} />
                <Stamp className="stamp" img='https://tinyurl.com/ydcsz3ac' alt="stamp" />
            </div>
            <div className="receiver">
                <AddressLabel address={receiverAddress} />
            </div>
        </div>
    )
}


export default Envelope;

