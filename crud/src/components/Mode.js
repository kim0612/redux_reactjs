import React, { Component } from 'react';

class Mode extends Component {
  render() {
    return (
      <ul>
        <li><a href="/" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode("create");
        }}>create</a></li>
        <li><a href="/" onClick={(e)=>{
          this.props.onChangeMode("update");
          e.preventDefault();
        }}>update</a></li>
        <li><button>delete</button></li>
      </ul>
    );
  }
}

export default Mode;