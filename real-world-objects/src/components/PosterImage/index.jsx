import React from 'react';
import './PosterImage.css'

const PosterImage = ({ posterContent }) => {
    return (
        <img className="posterimage" src={posterContent.image} alt={posterContent.title} />
    )
}


export default PosterImage;