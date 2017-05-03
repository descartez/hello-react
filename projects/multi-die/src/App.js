import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <DiceCup />
      </div>
      );
  }
}

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieFace: 'roll',
      dieSides: props.dieSides
    }
  }

  randomFace = (sides) => {
    let min = Math.ceil(0);
    let max = Math.floor(sides);
    return (Math.floor(Math.random() * (max - min)) + min)+1;
  }

  update() {
    this.setState({dieFace: this.randomFace(this.state.dieSides) })
  }

  render() {
    let dieSides = this.state.dieSides
    let dieFace = this.state.dieFace
    return (
      <div className={`die d${dieSides}`}>
      <h1>{dieFace}</h1>
      <button onClick={this.update.bind(this)}>roll d{dieSides}</button>
      </div>
      )
  }
}

class DiceCup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: [4,6,8,10,20]
    }
  }

  render() {
    let dice = this.state.dice
    return (
      <div id="dice-cup">
      <ul>
      {
        dice.map(die => {
          return (
            <li key={`d${die}_${index}`}>
              <Die dieSides={die}/>
            </li>
            );
          })
      }
      </ul>
      </div>
      )
  }
}

export default App;