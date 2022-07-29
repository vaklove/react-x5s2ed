import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const AddPost = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userid, setUserId] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);
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

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  };

  // const userOptions = () => {
  //   console.log('chi');
  //   fetchUsers();
  //   users.map((user) => (
  //     <option key={user.id} value={user.id}>
  //       {user.name}
  //     </option>
  //   ));
  // };

  const userOptions = () => {
    fetchUsers();
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
            onChange={onTitleChanged}
            placeholder="What's on your mind?"
          />
          <br />
          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            defaultValue={userid}
            onChange={onAuthorChanged}
          >
            <option value=""> </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
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
