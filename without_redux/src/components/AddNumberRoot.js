import React,{ Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberRoot extends Component {
  render(){
    return(
      <div className="AddNumberRoot">
        Add Number Root
        <AddNumber 
          _onChangeNum={(changeNum)=>{this.props.onChangeNum(changeNum)}}/>
      </div>
    );
  }
}
