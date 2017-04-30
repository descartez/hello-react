import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Die />
      </div>
      );
  }
}

class Die extends Component {
  randomFace = (sides) => {
    let min = Math.ceil(0);
    let max = Math.floor(sides);
    return (Math.floor(Math.random() * (max - min)) + min)+1;
  }

  constructor(props) {
    super(props);
    this.state = {
      dieFace: 'roll',
      dieSides: 6
    }
  }

  update() {
    this.setState({dieFace: this.randomFace(this.state.dieSides) })
  }

  render() {
    return (
      <div>
        <button onClick={this.update.bind(this)}>{this.state.dieFace}</button>
      </div>
      )
  }
}

export default App;
