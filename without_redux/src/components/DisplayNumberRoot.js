import React,{ Component } from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render(){
    return(
      <div className="DisplayNumberRoot">
        Display Number Root
        <DisplayNumber/>
      </div>
    );
  }
}
