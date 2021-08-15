import React, { Component } from 'react';

class Mode extends Component {
  render() {
    return (
      <ul>
        <li><a href="/" onClick={(e)=>{
          e.preventDefault();
          this.props.onChangeMode("create");
        }}>create</a></li>
        <li><a href="/" onClick={(e)=>{
          e.preventDefault();
          let ox;
          for (let i of this.props.contents){
            if(i.id === this.props.selected_id){
              ox = true;
              break;
            }
          }
          if(ox){
            this.props.onChangeMode("update");
          }else{
            alert("cannot update!")
          }
        }}>update</a></li>
        <li><button onClick={()=>{this.props.onDeleteContent()}}>delete</button></li>
      </ul>
    );
  }
}

export default Mode;