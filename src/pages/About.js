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
        <iframe src="https://www.youtube.com/embed/21hoOInDVlQ" title="rickroll" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default About;