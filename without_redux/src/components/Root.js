import React,{ Component } from "react";

import AddNumberRoot from './AddNumberRoot.js';
import DisplayNumberRoot from './DisplayNumberRoot';

export default class Root extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 10
    }
  }
  render(){
    console.log("=============================");
    console.log(`Root number : ${this.state.number}`);
    return(
      <div className="Root">
        Root
        <AddNumberRoot 
          _number={this.state.number} 
          onChangeNum={(inputnum)=>
            {this.setState({number:inputnum})}
          }
        />
        <DisplayNumberRoot
          _number={this.state.number}
        />  
      </div>
    );
  }
}
