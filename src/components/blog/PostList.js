import React, { useState, useEffect } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((er) => console.log(er));
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <div>
        <ol className="item">
          {posts.map((post) => (
            <li key={post.id} align="start">
              <div>
                <p className="title">{post.title}</p>
                <p className="body">{post.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
