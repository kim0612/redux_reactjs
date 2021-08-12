import React, { Component } from 'react';
import Welcome from './Welcome';
import Read from '../containers/Read';
import Create from '../containers/Create';

class Content extends Component {
  render() {
    if(this.props.mode === "welcome"){
      return <Welcome/>
    }
    else if(this.props.mode === "read"){
      return <Read/>
    }
    else if(this.props.mode === "create"){
      return <Create/>
    }
    else{
      return (<div>!!ERROR!!</div>);
    }
  }
}

export default Content;