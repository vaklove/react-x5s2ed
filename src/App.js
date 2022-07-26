import React from 'react';
import './style.css';
import UserList from './components/users/UserList';
import PostList from './components/blog/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserList />
      <PostList />
    </div>
  );
}
