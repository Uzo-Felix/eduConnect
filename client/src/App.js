// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Content from './components/Content/Content';
import Contributions from './components/Contributions/Contributions';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/content" component={Content} />
          <Route path="/contributions" component={Contributions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
