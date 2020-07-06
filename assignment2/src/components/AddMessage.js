import React from 'react'
import { connect } from 'react-redux'
import { apiAddMessage } from '../api'


let buffer = '';

class AddMessage extends React.Component {
  OnChange(event) {
    buffer = event.target.value;
  }

  Add = () => {
    apiAddMessage(buffer, new Date().toISOString().split('T')[0]);
  }

  render() {
    return (
      <div className="container">
        <label htmlFor="messageinput">Post a Message!</label>
        <input type="text" id="messageinput" onChange={this.OnChange} placeholder="You text here" />
        <button onClick={this.Add}>Add</button>
      </div>
    )
  }
}

export default connect()(AddMessage);