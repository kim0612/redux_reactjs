import React, {Component} from 'react';
import DisplayNum from '../containers/DisplayNum';

export default class DisplayNumRoot extends Component{
  render(){
    return(
      <div>
        Display Num Root
        <DisplayNum hello="hi"/>
      </div>
    )
  }
}