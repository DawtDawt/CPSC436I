import React from 'react'
import { clearMessage } from '../actions/index'
import { connect } from 'react-redux';

class ClearMessages extends React.Component {
  Clear = () => {
    this.props.clearMessage();
    console.log("clear 1");
  }

  render() {
    return (
      <input type="submit" value="Clear Messages" onClick={this.Clear}></input>
    );
  }
}

export default connect(null, { clearMessage })(ClearMessages);