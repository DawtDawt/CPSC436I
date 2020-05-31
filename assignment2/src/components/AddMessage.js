import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/index'

function AddMessage({ addMessage }) {
  let buffer = '';

  const OnChange = (event) => {
    buffer = event.target.value;
  }

  const Add = () => {
    addMessage(buffer);
    buffer = '';
  }

  return (
    <div className="container">
      <label htmlFor="messageinput">Post a Message!</label>
      <input type="text" id="messageinput" onChange={OnChange} placeholder="You text here" />
      <button onClick={Add}>Add</button>
    </div>
  );
}

export default connect(null, { addMessage })(AddMessage);