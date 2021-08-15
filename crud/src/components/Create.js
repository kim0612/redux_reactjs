import React, { Component } from 'react';

class Create extends Component {
  render() {
    const onCreateContent = this.props.onCreateContent;
    return (
      <div>
        <form onSubmit={(e)=>{e.preventDefault();onCreateContent(e.target.title.value, e.target.desc.value)}}>
          <input type="text" name="title"></input><br/>
          <textarea name="desc"></textarea><br/>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    );
  }
}

export default Create;