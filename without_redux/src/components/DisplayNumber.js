import React,{ Component } from "react";

export default class DisplayNumber extends Component {
  render(){
    return(
      <div className="DisplayNumber">
        Display Number
        <p>
          <form>
            <input type="text" value=""></input>
          </form>
        </p>
      </div>
    );
  }
}
