import React,{ Component } from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render(){
    console.log(`Display Number Root : ${this.props._number}`)
    return(
      <div className="DisplayNumberRoot">
        Display Number Root
        <DisplayNumber __number={this.props._number}/>
      </div>
    );
  }
}
