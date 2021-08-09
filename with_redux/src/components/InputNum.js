import React, {Component} from 'react';

export default class InputNum extends Component{
  render(){
    return (
      <div>
        Input Num <br/>
        <form>
          <input type="text" name="inputNum" />
          <input type="submit" value="+"/>
        </form>
      </div>
    )
  }
}