import React from 'react';
import PosterImage from '../PosterImage';
import PosterText from '../PosterText';
import PosterTitle from '../PosterTitle';
import './PosterComponent.css';




const PosterComponent = ({ posterContent }) => {
    return (
        <div className="wrapper">
            <div className="innercontent">
                <PosterImage posterContent={posterContent} />
                <PosterTitle posterContent={posterContent} />
                <PosterText posterContent={posterContent} />
            </div>
        </div>
    )
}


export default PosterComponent;