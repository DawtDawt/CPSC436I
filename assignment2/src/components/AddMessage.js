import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/index'


let buffer = '';

class AddMessage extends React.Component {
  OnChange(event) {
    buffer = event.target.value;
  }

  Add = () => {
    this.props.addMessage(buffer);
    buffer = '';
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

export default connect(null, { addMessage })(AddMessage);