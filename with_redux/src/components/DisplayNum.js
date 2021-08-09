import React,{Component} from 'react';

export default class DisplayNum extends Component{
  render(){
    return (
      <div>
        Display Num <br/>
        <input type="text" value="" readOnly></input>
      </div>
    )
  }
}