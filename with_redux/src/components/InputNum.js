import React, {Component} from 'react';

export default class InputNum extends Component{
  render(){
    return (
      <div>
        Input Num
        <form onSubmit={
          (e)=>{
            e.preventDefault(); 
            this.props.onClick(Number(e.target.inputNum.value));
          }
        }>
          <input type="text" name="inputNum" />
          <input type="submit" value="+"/>
        </form>
        {this.props.hello}
      </div>
    )
  }
}