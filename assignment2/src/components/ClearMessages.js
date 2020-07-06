import React from 'react'
import { apiClearMessages } from '../api'
import { connect } from 'react-redux';

class ClearMessages extends React.Component {
  Clear = () => {
    apiClearMessages();
    console.log("clear 1");
  }

  render() {
    return (
      <input type="submit" value="Clear Messages" onClick={this.Clear}></input>
    );
  }
}

export default connect()(ClearMessages);