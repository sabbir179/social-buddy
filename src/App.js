import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PostDetail from './components/PostDetail/PostDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route  path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
