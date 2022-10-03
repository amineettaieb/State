
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    Person: {
      fullName: 'Amin'
      , bio: 'hello',
      imgSrc: '',
      profession: 'web developer',
    },
    Show: true,
    Elapsed: 0,
  }
  show = () => {
    this.setState({ Show: !this.state.Show })
    console.log(this.state.Show)
  }

  componentDidMount() {
    this.interval = setInterval(()=>this.setState(s=>({Elapsed: s.Elapsed + 1})), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  
  render() {
    return (
      <div className="App">
        {/* <img src={this.Person.}/> */}
        <h3>{this.state.Elapsed}</h3>
        {this.state.Show && <div>
          <h1>{this.state.Person.fullName}</h1>
          <h2>{this.state.Person.bio}</h2>
          <h3>{this.state.Person.profession}</h3>
        </div>}
        <button onClick={this.show}>{this.state.Show ? 'Hide' : 'Show'}</button>
      </div>
    );
  }

}
