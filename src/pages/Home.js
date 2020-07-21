import React, { Component } from 'react';
import Title from '../components/Title';
import AddMessage from '../components/AddMessage';
import MessageList from '../components/MessageList';

class Home extends Component {
  render() {
    return (
      <div>
        <Title />
        <AddMessage />
        <MessageList />
      </div>
    );
  }
}

export default Home;