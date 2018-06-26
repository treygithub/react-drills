import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textfield: '',
      header: 'Change Me'
    }

    this.updateHeader = this.updateHeader.bind(this)
  }




updateHeader(val) {
  this.setState({ header: val });
  }



  render() {
    return (
      <div className="wraper"> 
      <h1>Type here!!!</h1>
      <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
      </div>
    );
  }
}

export default App;
