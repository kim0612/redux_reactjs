import React, { Component } from 'react';
import Header from './components/Header';
import Mode from './containers/Mode';
import TOC from './containers/TOC';
import Content from './containers/Content';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TOC/>
        <Mode/>
        <Content/>
      </div>
    );
  }
}

export default App;