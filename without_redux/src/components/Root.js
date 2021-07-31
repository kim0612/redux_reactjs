import React,{ Component } from "react";

import AddNumberRoot from './AddNumberRoot.js';
import DisplayNumberRoot from './DisplayNumberRoot';

export default class Root extends Component {
  render(){
    return(
      <div className="Root">
        Root
        <AddNumberRoot/>
        <DisplayNumberRoot/>  
      </div>
    );
  }
}
