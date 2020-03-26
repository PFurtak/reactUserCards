import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    users: []
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      const res = await fetch('https://randomuser.me/api/?results=15');
      const data = await res.json();
      this.setState({
        users: data.results,
        loading: false
      });
    } catch (error) {
      this.setState({
        data: error.message
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='User Cards' icon='fab fa-github' />
        <div class='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
