import React,{ Component } from "react";

export default class DisplayNumber extends Component {
  render(){
    console.log(`Display Number : ${this.props.__number}`)
    return(
      <div className="DisplayNumber">
        Display Number
          <form>
            <input type="text" value={this.props.__number} readOnly></input>
          </form>
      </div>
    );
  }
}
