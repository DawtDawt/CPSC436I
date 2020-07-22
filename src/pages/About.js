import React, { Component } from 'react';
import Title from '../components/Title';

class About extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="subtle">
          A picture can is worth a thousand words...
          then how many words is a video worth?
        </div>
      </div>
    );
  }
}

export default About;