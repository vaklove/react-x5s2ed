import React from 'react';
import './style.css';
import UserList from './components/users/UserList';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserList />
    </div>
  );
}
