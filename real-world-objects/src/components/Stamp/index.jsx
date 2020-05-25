import React from 'react';
import './Stamp.css';


const Stamp = ({ img, alt, id }) => {
    return (
        <img className={id} src={img} alt={alt} />
    )
}


export default Stamp;