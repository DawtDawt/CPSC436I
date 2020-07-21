import React from 'react';
import { connect } from 'react-redux'
import ClearMessages from './ClearMessages'
import Message from '../pages/Message'
import { apiGetMessages } from '../api';

const MapMessages = ({ messages }) => {
  return (
    messages.map((message, i) => (
      <Message key={i} message={message} />
    ))
  );
}

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    apiGetMessages();
  }

  render() {
    return (
    <div className="container">
      <ClearMessages />
      <ul id="messages">
        <MapMessages messages={this.props.messages} />
      </ul>
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return { messages: state.messages };
}

export default connect(mapStateToProps)(MessageList);