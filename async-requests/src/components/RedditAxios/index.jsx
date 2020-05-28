import React from 'react';
import axios from 'axios';

const RedditAxios = ({ subreddit }) => {
    const [posts, setPosts] = React.useState([]);
    const url = `https://www.reddit.com/r/${subreddit}.json`;
    React.useEffect(() => {
        axios.get(url)
            .then(res => {
                const newPosts = res.data.data.children.map(obj => obj.data);
                setPosts(newPosts);
            });
    }, []);

    return (
        <div>
            <h1>/r/reactjs</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default RedditAxios;