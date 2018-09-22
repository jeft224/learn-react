import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './game/game';
import Clock from './clock/clock';
import Calculator from './calculator/calculator'

class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      status:true,
      name:"时钟"
    })
  }
  changeStatus = () => {
    this.setState({
      status:!this.state.status,
    })
  }
  changeName = () => {
    this.setState({
      name:"你好！",
    })
  }
  render() {
    return (
      <div className='App'>
        <button className ='App-button' onClick = {this.changeStatus}>点击改变</button>
        {!this.state.status ?   <button className ='App-button' onClick = {this.changeName}>点击改变name</button> : ''}
        {
          this.state.status ? <Game/> :  <Clock name = {this.state.name}/>
        }
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
