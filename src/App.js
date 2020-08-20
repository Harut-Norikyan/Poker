/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import spadesLogo from "./SuitsIcon/spade.png";
import diamondsLogo from "./SuitsIcon/diamond.png";
import clubsLogo from "./SuitsIcon/club.png";
import heartsLogo from "./SuitsIcon/heart.png";
import table from "./SuitsIcon/table.png";
import Cards from "./Components/Cards";

class App extends Component {
  state = {
    suits: ["spades", "diamonds", "clubs", "hearts"],
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    deck: [],
    valueColorRed: '',
    valueColorBlack: '',
    myCards: [],
    hisCards: [],
    ourCardsStepOne: [],
    ourCardsStepTwo: [],
    ourCardsStepThree: [],
    round: 0,
    myCardsResult: [],
    hisCardsResult: [],
  }

  componentDidMount() {
    this.createDeck();
  };

  createDeck = async () => {
    let { suits, values, deck } = this.state;
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i] };
        deck.push(card);
      };
    };
    deck.map(u => {
      if (u.suit === "spades" || u.suit === "clubs") {
        u.color = "black"
      } else {
        u.color = "red"
      }
      if (u.suit === "spades") u.suitLogo = spadesLogo
      if (u.suit === "diamonds") u.suitLogo = diamondsLogo
      if (u.suit === "clubs") u.suitLogo = clubsLogo
      if (u.suit === "hearts") u.suitLogo = heartsLogo
    });
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let shuffling = deck[location1];
      deck[location1] = deck[location2];
      deck[location2] = shuffling;
    };
    await this.setState({ deck });
  };

  setOneCard = () => {
    let { deck, myCards, hisCards, ourCardsStepOne } = this.state
    for (let i = 1; i < 3; i++) {
      setTimeout(() => {
        myCards.push(deck.slice(0, 1)[0]);
        deck = deck.slice(1);
        this.setState({ myCards, deck });
        setTimeout(() => {
          hisCards.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ hisCards, deck });
        }, 1000);
      }, i * 500);
    };
    setTimeout(() => {
      for (let i = 1; i < 4; i++) {
        setTimeout(() => {
          ourCardsStepOne.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ ourCardsStepOne, deck });
        }, i * 500);
      };
    }, 2000);
  };

  stepOne = async () => {
    let { ourCardsStepTwo, round, ourCardsStepOne, hisCards, myCards, ourCardsStepThree } = this.state
    if (ourCardsStepThree.length) {
      await this.setState({
        myCards: [],
        hisCards: [],
        ourCardsStepOne: [],
        ourCardsStepTwo: [],
        ourCardsStepThree: [],
        deck: [],
        round: round + 1,
        myCardsResult: [],
        hisCardsResult: []
      });
      this.createDeck();
    };
    if (!ourCardsStepTwo.length && !ourCardsStepOne.length && !hisCards.length && !myCards.length) {
      this.setOneCard();
    };
  };

  stepTwo = async () => {
    let { deck, ourCardsStepTwo, ourCardsStepOne } = this.state;
    if (ourCardsStepOne.length !== 0 && !ourCardsStepTwo.length) {
      for (let i = 1; i < 2; i++) {
        setTimeout(() => {
          ourCardsStepTwo.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ ourCardsStepTwo, deck });
        }, i * 500);
      };
    };
  };

  stepThree = () => {
    let { deck, ourCardsStepTwo, ourCardsStepOne, myCards, hisCards, ourCardsStepThree } = this.state
    if (ourCardsStepOne.length !== 0 && ourCardsStepTwo.length !== 0 && !ourCardsStepThree.length) {
      for (let i = 1; i < 2; i++) {
        setTimeout(() => {
          ourCardsStepThree.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ ourCardsStepThree, deck });
          if(ourCardsStepThree.length === 1){
           this.setState({
              myCardsResult:[...myCards,...ourCardsStepOne,...ourCardsStepTwo,...ourCardsStepThree],
              hisCardsResult:[...hisCards,...ourCardsStepOne,...ourCardsStepTwo,...ourCardsStepThree],
            });
            this.checkingOurCards();
          };
        }, i * 500);
      };
    };
  }


  checkingOurCards = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="tableBlock">
          <div className="hisCardsBlock blocks">
            <Cards data={this.state.hisCards} />
          </div>
          <div className="ourCardsBlock blocks">
            <div className="ourCardsStepOne blocks">
              <Cards data={this.state.ourCardsStepOne} />
            </div>
            <div className="ourCardsStepTwo blocks">
              <Cards data={this.state.ourCardsStepTwo} />
            </div>
            <div className="ourCardsStepTwo blocks">
              <Cards data={this.state.ourCardsStepThree} />
            </div>
          </div>
          <div className="myCardsBlock blocks">
            <Cards data={this.state.myCards} />
          </div>
          <img src={table} className="table" alt="" />
          <button onClick={this.stepOne}>Step 1</button>
          <button onClick={this.stepTwo}>Step 2</button>
          <button onClick={this.stepThree}>Step 3</button>
          <div>
            <h1>Round {this.state.round}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
