import React,{ Component } from "react";

export default class AddNumber extends Component {
  render(){
    return(
      <div className="AddNumber">
        Add Number
        <p>
          <form>
            <input type="text" value="0"></input>
            <input type="button" value="+"/>
          </form>
        </p>
      </div>
    );
  }
}
