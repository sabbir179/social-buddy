import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route  path="/post">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
