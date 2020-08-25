import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Users from './components/users';
import Hello from './components/hello';

const Header = () => {
  return <ul className="navbar">
  <li className="navbar-item">
    <Link to="/">Users</Link>
  </li>
  <li className="navbar-item">
    <Link to="/hello">Hello</Link>
  </li>
</ul>
}

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/hello" component={Hello} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
