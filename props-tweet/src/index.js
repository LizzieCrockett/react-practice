import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  )
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

const Count = ({ count }) => {
  if (count > 0) {
    return (
      <span className="retweet-count">{count}</span>
    );
  } else {
    return null;
  }
}


const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart like-button" />
      <span className="like-count">
      {count ? count : null}
      </span>
    </span>
  )
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: 'Something about cats.',
  gravatar: '2a269e50f4f51e56582bd49842555eaf',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person'
  },
  likes: 10,
  retweets: 10,
  timestamp: '2016-07-30 21:24:37'
};

ReactDOM.render(<Tweet tweet={testTweet} />,
  document.querySelector('#root'));
