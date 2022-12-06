import React, { Component } from 'react'
import Person from './Components/Profile'
import "./App.css";

export default class App extends Component {

  state={
    show: false,
    count: 0,
  };
  
  
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  };
  show() 
     {
    if (this.state.show) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="App">
      <button
        className="button-53" style={{  backgroundColor: "#cfe1f7", 
        marginTop: 70,
        border: "none",
        color: "white",
        padding: "40  40" ,
        textAlign: "center",
        textDecoration: "none",
        display: "inlineBlock",
        fontSize: 60,
      
      }}
        onClick={() => {
          this.setState({ show: !this.state.show });
          this.show();
        }}
      >
        Click to Show profile
      </button>
      {this.state.show ? (
        <Person />) : (
        <h2>
          {this.state.count}
        </h2>
      )}
    </div>
    )
  }
}
