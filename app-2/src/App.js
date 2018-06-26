import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      foo:[
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }

  }



  render(){

    
    let foo = this.state.foo.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
 
    return (
      <div className="App">
      { foo }
      </div>
    );
  }
}

export default App;
