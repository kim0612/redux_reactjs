import React, { Component } from 'react';

class Read extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.content.title}</h2>
        <h5>{this.props.content.desc}</h5>
      </div>
    );
  }
}

export default Read;