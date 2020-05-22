import React from 'react';
import UserPic from '../UserPic';
import NameAndHandle from '../NameAndHandle';
import TimeStamp from '../TimeStamp';
import TweetText from '../TweetText';
import ReplyButton from '../ReplyButton';
import RTButton from '../RTButton';
import LikeButton from '../LikeButton';
import ShareMoreButton from '../ShareMoreButton';

const Tweet = () => {
    return (
        <div className="outerwrapper">
            <UserPic />
            <div className="tweet">
                <div className="content">
                    <NameAndHandle /><TimeStamp />
                    <TweetText />
                </div>
                <div className="buttons">
                    <ReplyButton />
                    <RTButton />
                    <LikeButton />
                    <ShareMoreButton />
                </div>
            </div>
        </div>
    );
}

export default Tweet;