import React from 'react';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}
