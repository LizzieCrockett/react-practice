import React from 'react';
import './PosterText.css'


const PosterText = ({ posterContent }) => {
    return (
        <div className="postertext">
            {posterContent.text}
        </div>
    )
}

export default PosterText;