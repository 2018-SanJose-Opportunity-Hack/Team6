import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Matching = () => {
  return (
    <h1>Matching</h1>
  );
};

const Chat = () => {
  return (
    <h1>Chat</h1>
  );
};

const Home = () => {
  return (
    <h1>Home</h1>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/' component={Home}/>
            <Route path='/chat' component={Chat}/>
            <Route path='/matching' component={Matching}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
