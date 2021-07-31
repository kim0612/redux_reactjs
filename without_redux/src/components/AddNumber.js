import React,{ Component } from "react";

export default class AddNumber extends Component {
  render(){
    console.log(`AddNumber number : ${this.props.__number}`);
    return(
      <div className="AddNumber">
        Add Number
          <form>
            <input type="text" value={this.props.__number} readOnly></input>
            <input 
              type="button" 
              value="+"
              onClick={()=>{this.props._onChangeNum(this.props.__number+1)}}  
            />
          </form>
      </div>
    );
  }
}
