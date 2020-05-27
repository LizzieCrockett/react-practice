import React from 'react';
import Count from '../Count';


const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      {count ? <Count count={count} /> : null}
    </span>
  )
}

export default LikeButton;


