import React, { Component } from 'react';

class TOC extends Component {
  render() {
    const contents = this.props.contents;
    const onChangeContent = this.props.onChangeContent;
    let contents_list = [];

    for (let i of contents){
      contents_list.push(<li key={i.id}><a href="/" onClick={(e)=>{e.preventDefault(); onChangeContent(i.id)}}>{i.title}</a></li>);
    }
    // debugger;
    //console.log(`it is ${contents_list}`);

    
    
    return (
      <div>
        <ol>
          {contents_list}
        </ol>
      </div>
    );
  }
}

export default TOC;