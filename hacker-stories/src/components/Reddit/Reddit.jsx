import React from 'react';
import axios from 'axios';

function Reddit() {
    const [posts, setPosts] = React.useState([]);
    
    React.useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
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

export default Reddit;