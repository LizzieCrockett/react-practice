import React from 'react';

const RedditPosts = ({ subreddit }) => {
    const [posts, setPosts] = React.useState([]);
    const url = `https://www.reddit.com/r/${subreddit}.json`
    React.useEffect(() =>
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed');
            })
            .then(json => {
                const newPosts = json.data.data.children.map(
                    obj => obj.data);
                setPosts(newPosts)
            })
            .catch(error => {
                console.error(error);
            }), []
    );

    return (
        <div className="reddit-posts">
            <h1>{subreddit}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default RedditPosts;