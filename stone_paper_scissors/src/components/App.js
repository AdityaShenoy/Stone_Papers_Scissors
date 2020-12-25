import '../styles/App.css';

import stone from '../images/stone.png';
import stone_user from '../images/stone_user.png';
import paper from '../images/paper.png';
import paper_user from '../images/paper_user.png';
import scissors from '../images/scissors.png';
import scissors_user from '../images/scissors_user.png';

import React, {Component} from 'react';
import Score from './Score';
import Hand from './Hand';
import AppButton from './AppButton';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user_score: 0,
      comp_score: 0,
      user_move: stone_user,
      comp_move: stone,
      animate: false
    };
  }

  handleReset() {
    this.setState({
      user_score: 0,
      comp_score: 0,
      user_move: stone_user,
      comp_move: stone,
      animate: false
    });
  }

  animateHands(move) {
    this.setState({
      user_move: stone_user,
      comp_move: stone,
      animate: true
    });
    setTimeout(() => {
      if (this.state.animate) {
        this.setState({
          animate: false
        });
        this.performMove(move);
      }
    }, 1000);
  }

  performMove(move) {
    const user_move = {
      "S": stone_user,
      "P": paper_user,
      "X": scissors_user
    }[move];
    let comp_move = ["S", "P", "X"][Math.floor(Math.random() * 3)];
    let user_score = this.state.user_score;
    let comp_score = this.state.comp_score;

    if ((move === "S" && comp_move === "X") ||
        (move === "P" && comp_move === "S") ||
        (move === "X" && comp_move === "P")) {
      user_score += 1;
    } else if ((move === "X" && comp_move === "S") ||
               (move === "S" && comp_move === "P") ||
               (move === "P" && comp_move === "X")) {
      comp_score += 1;
    }
    comp_move = {
      "S": stone,
      "P": paper,
      "X": scissors
    }[comp_move];

    this.setState({
      user_score: user_score,
      comp_score: comp_score,
      user_move: user_move,
      comp_move: comp_move
    });
  }

  render() {
    return (
      <div className="app">
        
        <div className="app__header">
          Stone Paper Scissors
        </div>

        <Score 
          user_score={this.state.user_score}
          comp_score={this.state.comp_score}
          onReset={() => {this.handleReset()}}/>

        <div className="app__hands">
          <Hand
            src={this.state.user_move}
            animate={this.state.animate} />
          <Hand
            src={this.state.comp_move}
            animate={this.state.animate} />
        </div>

        <div className="app__buttons">
          <AppButton
            text="Stone"
            onClick={() => this.animateHands("S")} />
          <AppButton
            text="Paper"
            onClick={() => this.animateHands("P")} />
          <AppButton
            text="Scissors"
            onClick={() => this.animateHands("X")} />
        </div>

        <div>
          {/* Empty */}
        </div>

      </div>
    );
  }
}