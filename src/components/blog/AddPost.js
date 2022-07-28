import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const AddPost = () => {
  const [users, setUsers] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userid, setUserId] = useState('');

  useEffect(() => {}, []);
  const savePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: content,
        userId: userid,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const onTitleChanged = (evt) => {
    setTitle(evt.target.value);
    console.log(title);
  };
  const onAuthorChanged = (evt) => {
    setUserId(evt.target.value);
  };
  const onContentChanged = (evt) => {
    setContent(evt.target.value);
  };
  return (
    <>
      <section>
        <h2>Add a New Post</h2>

        <form className="row">
          <br />
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's on your mind?"
          />
          <br />
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" onChange={onAuthorChanged}>
            <option value=""> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            defaultValue={content}
            name="postContent"
            onChange={onContentChanged}
          ></textarea>
          <Button type="button" onClick={savePost}>
            Save Post
          </Button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
