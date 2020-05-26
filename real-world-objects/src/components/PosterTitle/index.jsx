import React from 'react';
import './PosterTitle.css'


const PosterTitle = ({ posterContent }) => {
    return (
        <div className="postertitle">
           - {posterContent.title} -
        </div>
    )
}

export default PosterTitle;