import React,{ Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberRoot extends Component {
  render(){
    console.log(`AddNumberRoot number : ${this.props._number}`)
    return(
      <div className="AddNumberRoot">
        Add Number Root
        <AddNumber 
          __number={this.props._number}
          _onChangeNum={(changeNum)=>{this.props.onChangeNum(changeNum)}}/>
      </div>
    );
  }
}
