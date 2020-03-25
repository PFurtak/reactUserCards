import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: 'testing'
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://randomuser.me/api/?results=1');
      const data = await res.json();
      this.setState({
        users: data.value
      });
    } catch (error) {
      this.setState({
        users: error.message
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='User Cards' icon='fab fa-github' />
        <div class='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
