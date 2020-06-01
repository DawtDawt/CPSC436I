import React from 'react'
import { connect } from 'react-redux'

class Popup extends React.Component {
  render() {
    return (
      <text>{this.props.value}
        {this.props.showPopup ?
          <div className='popup'>
            <div className='popup_inner'>
              <h1>{this.props.value}</h1>
              <button className='popup_button' onClick={this.props.closePopup}>close me</button>
            </div>
          </div>
          : null
        }
      </text>
    );
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <li>
        <Popup closePopup={this.togglePopup} showPopup={this.state.showPopup} value={this.props.message.content}></Popup>
        <button className='expand_button' onClick={this.togglePopup}>Expand</button>
      </li>
    );
  }
}

export default connect()(Message);