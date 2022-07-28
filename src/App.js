import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import UserList from './components/users/UserList';
import PostList from './components/blog/PostList';

export default function App() {
  return (
    <div>
      {/* <UserList /> */}
      <PostList />
    </div>
  );
}
