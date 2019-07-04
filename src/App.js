// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import DividerExampleVertical from './components/dividerExampleVertical';
// import { Grid, Segment } from 'semantic-ui-react'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       homeScore: 0,
//       awayScore: 0,
//     }
//   }
//   homeScoreAdd=() => {
//     this.setState({
//       homeScore: this.state.homeScore + 1
//     });
//   }
//   homeScoreSubstract=() => {
//     this.setState({
//       homeScore: this.state.homeScore - 1
//     });
//   }
//   awayScoreAdd=() => {
//     this.setState({
//       awayScore: this.state.awayScore + 1
//     });
//   }
//   awayScoreSubstract=() => {
//     this.setState({
//       awayScore: this.state.awayScore - 1
//     });
//   }

// render(){
//     return (
//     <div>
//       <h1>HOME</h1>
//       {this.state.homeScore}
//       <div>
//       <button onClick={this.homeScoreAdd}>+</button>
//       <button onClick={this.homeScoreSubstract}>-</button>
//       </div>
//       <h1>AWAY</h1>
//       {this.state.awayScore}
//       <div>
//       <button onClick={this.awayScoreAdd}>+</button>
//       <button onClick={this.awayScoreSubstract}>-</button>
//       </div>
//     </div>

//   )}}

//   export default App

import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import "./App.css";
import { Button } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScore: 0,
      awayScore: 0
    };
  }
  homeScoreAdd = () => {
    this.setState({
      homeScore: this.state.homeScore + 1
    });
  };
  homeScoreAdd2 = () => {
    this.setState({
      homeScore: this.state.homeScore + 2
    });
  };homeScoreAdd3 = () => {
    this.setState({
      homeScore: this.state.homeScore + 3
    });
  };
  homeScoreSubstract = () => {
    this.setState({
      homeScore: this.state.homeScore - 1
    });
  };
  awayScoreAdd = () => {
    this.setState({
      awayScore: this.state.awayScore + 1
    });
  };
  awayScoreAdd2 = () => {
    this.setState({
      awayScore: this.state.awayScore + 2
    });
  };
  awayScoreAdd3 = () => {
    this.setState({
      awayScore: this.state.awayScore + 3
    });
  };
  awayScoreSubstract = () => {
    this.setState({
      awayScore: this.state.awayScore - 1
    });
  };
  render() {
    return (
      
      <Segment>
        <h2>BASKET COUNTER</h2>
        <Grid columns={2} relaxed="very">
          <Grid.Column className="LeftSide">
            <h1>HOME</h1>
            <div className="scoring">{this.state.homeScore}</div>
            <div className="leftButton">
              <Button.Group className="sizeFont">
                <Button color='green' onClick={this.homeScoreAdd}>+1</Button>
                
                <Button color='green'onClick={this.homeScoreAdd2}>+2</Button>
                
                <Button color='green'onClick={this.homeScoreAdd3}>+3</Button>
                
                <Button color='red' onClick={this.homeScoreSubstract}>-1</Button>
              </Button.Group>
              
            </div>
          </Grid.Column>
          <Grid.Column className="RightSide">
            <h1>AWAY</h1>
            <div className="scoring">{this.state.awayScore}</div>
            <div className="leftButton">
            <Button.Group className="sizeFont">
                <Button color='green' onClick={this.awayScoreAdd}>+1</Button>
                
                <Button color='green'onClick={this.awayScoreAdd2}>+2</Button>
                
                <Button color='green'onClick={this.awayScoreAdd3}>+3</Button>
                
                <Button color='red' onClick={this.awayScoreSubstract}>-1</Button>
              </Button.Group>
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical>
          <div className="versus">VS</div>
        </Divider>
      </Segment>
    );
  }
}

export default App;
