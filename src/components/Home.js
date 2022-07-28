import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './users/UserList';
import PostList from './blog/PostList';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Home = () => (
  <Home>
    <Switch>
      <Route exact path="/post" component={PostList} />
      <Route exact path="/users" component={UserList} />
    </Switch>
  </Home>
);

export default Home;
