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
      <div>
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
      dice: [],
      nextAddDieSides: 6,
    }
  }

  addDie = (sides) => {
    console.log(`d${sides}`)
    let diceSet = this.state.dice
    diceSet.push(sides)
    this.setState({dice: diceSet})
  }

  removeDie = (dieIndex) => {
    console.log(`removing die at ${dieIndex}`)
    let diceSet = this.state.dice
    diceSet.splice(dieIndex, 1)
    console.log(diceSet)
    this.setState({dice: diceSet})
  }

  render() {
    let dice = this.state.dice
    return (
      <div className='container'>
      <div id='die-adder'>
        <h4>Specify number of die faces</h4>
        <input type='number' value={this.state.nextAddDieSides} onChange={event => this.setState({ nextAddDieSides: event.target.value })} />
        <button id='add-die' onClick={() => {this.addDie(this.state.nextAddDieSides)}}>Add Dice</button>
      </div>
      <ul id="dice-cup">
      {
        dice.map((die, index) => {
          return (
            <li key={`d${die}_${index}`} className={`die d${die}`}>
              <button className='remove-die' onClick={() => {this.removeDie(index)}}>x</button>
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