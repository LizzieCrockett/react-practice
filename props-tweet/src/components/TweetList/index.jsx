import React from 'react';
import Tweet from '../Tweet';

const TweetList = ({ tweets }) => {
    return (
      <>
        {
          tweets.map(tweet => (
            <Tweet tweet={tweet} />
          ))
        }
      </>
    )
  }


export default TweetList;