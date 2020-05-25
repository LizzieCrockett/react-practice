import React from 'react';
import Stamp from '../Stamp';
import AddressLabel from '../AddressLabel';
import './Envelope.css'



const senderAddress = {
    name: 'Lizzie Crockett',
    street: '16 Dandridge Close',
    town: 'London',
    postcode: 'SE10 0RP'
}

const receiverAddress = {
    name: 'Will Birch',
    street: 'Flat 5, 3 Recreation Road',
    town: 'Sydenham',
    postcode: 'SE26 4ST'
}


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

