import React from 'react'
import { connect } from 'react-redux'

const Message = ({ message }) => {
  return (
    <li>
      {message.content}
    </li>
  );
}

const MapMessages = ({ messages }) => {
  return (
    messages.map((message, i) => (
      <Message key={i} message={message} />
    ))
  );
}

function MessageList({ messages }) {
  return (
    <div className="container">
      <ul>
        <MapMessages messages={messages} />
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { messages: state.messages };
}

export default connect(mapStateToProps)(MessageList);