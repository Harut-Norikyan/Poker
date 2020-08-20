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
    ourCardsLeft: [],
    ourCardsRight: [],
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
    let { deck, myCards, hisCards, ourCardsLeft } = this.state
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
          ourCardsLeft.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ ourCardsLeft, deck });
        }, i * 500);
      };
    }, 2000);
  };

  stepOne = async () => {
    let { ourCardsRight, round, ourCardsLeft, hisCards, myCards } = this.state
    if (ourCardsRight.length) {
      await this.setState({
        myCards: [],
        hisCards: [],
        ourCardsLeft: [],
        ourCardsRight: [],
        deck: [],
        round: round + 1,
        myCardsResult:[],
        hisCardsResult:[]
      });
      this.createDeck();
    };
    if (!ourCardsRight.length && !ourCardsLeft.length && !hisCards.length && !myCards.length) {
      this.setOneCard();
    };
  };

  stepTwo = async() => {
    let { deck, ourCardsRight, ourCardsLeft, myCards, hisCards } = this.state;
    if (ourCardsLeft.length !== 0 && !ourCardsRight.length) {
      for (let i = 1; i < 3; i++) {
         setTimeout(() => {
          ourCardsRight.push(deck.slice(0, 1)[0]);
          deck = deck.slice(1);
          this.setState({ ourCardsRight });
          if(ourCardsRight.length === 2){
           this.setState({
              myCardsResult:[...myCards,...ourCardsLeft,...ourCardsRight],
              hisCardsResult:[...hisCards,...ourCardsLeft,...ourCardsRight]
            })
            this.checkingOurCards()
          }
        }, i * 500);       
      };
    };
  };

  checkingOurCards=()=>{
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
            <div className="ourCardsLeft blocks">
              <Cards data={this.state.ourCardsLeft} />
            </div>
            <div className="ourCardsRight blocks">
              <Cards data={this.state.ourCardsRight} />
            </div>
          </div>
          <div className="myCardsBlock blocks">
            <Cards data={this.state.myCards} />
          </div>
          <img src={table} className="table" alt="" />
          <button onClick={this.stepOne}>Step 1</button>
          <button onClick={this.stepTwo}>Step 2</button>
          <div>
            <h1>Round {this.state.round}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
