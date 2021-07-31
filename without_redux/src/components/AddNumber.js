import React,{ Component } from "react";

export default class AddNumber extends Component {
  state = {addNum:""};
  render(){
    return(
      <div className="AddNumber">
        Add Number
          <form>
            <input 
              type="text" 
              value={this.state.addNum}
              onChange={(e)=>{this.setState({addNum:Number(e.target.value)})}} 
            />
            <input 
              type="button" 
              value="+"
              onClick={()=>{this.props._onChangeNum(this.state.addNum)}}  
            />
          </form>
      </div>
    );
  }
}
