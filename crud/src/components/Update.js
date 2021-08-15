import React, { Component } from 'react';

class Update extends Component {
  state = {
    title : this.props.title,
    desc : this.props.desc
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{e.preventDefault();this.props.onUpdateContent(this.state.title, this.state.desc)}}>
          <input type="text" value={this.state.title} onChange={(e)=>{e.preventDefault(); this.setState({title:e.target.value})}}></input><br/>
          <textarea value={this.state.desc} onChange={(e)=>{e.preventDefault();this.setState({desc:e.target.value})}}></textarea><br/>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    );
  }
}

export default Update;