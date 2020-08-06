import React, {Component} from 'react';
import spadesLogo from "./SuitsIcon/spade.png"
import diamondsLogo from "./SuitsIcon/diamond.png"
import clubsLogo from "./SuitsIcon/club.png"
import heartsLogo from "./SuitsIcon/heart.png"
import table from "./SuitsIcon/table.png"

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
  }

  componentDidMount() {
    this.createDeck()
  }


  createDeck = async () => {
    let {suits, values, deck} = this.state
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = {value: values[x], suit: suits[i]};
        deck.push(card);
      }
    }
    deck.map(u => {
      if (u.suit === "spades" || u.suit === "clubs") {
        u.color = "black"
      } else {
        u.color = "red"
      }
      if (u.suit === "spades") u.suit = spadesLogo
      if (u.suit === "diamonds") u.suit = diamondsLogo
      if (u.suit === "clubs") u.suit = clubsLogo
      if (u.suit === "hearts") u.suit = heartsLogo
    })
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let shuffling = deck[location1];
      deck[location1] = deck[location2];
      deck[location2] = shuffling;
    }
    await this.setState({
      deck
    })
  }


  stepOne = async () => {
    let {deck, myCards, hisCards, ourCardsLeft, ourCardsRight} = this.state
    if (!ourCardsRight.length) {
      myCards = deck.slice(0, 2)
      deck = deck.slice(2)
      hisCards = deck.slice(0, 2)
      deck = deck.slice(2)
      ourCardsLeft = deck.slice(0, 3)
      deck = deck.slice(3)
      await this.setState({
        myCards,
        hisCards,
        ourCardsLeft,
        deck
      })
    }else {
     await this.setState({
        myCards: [],
        hisCards: [],
        ourCardsLeft: [],
        ourCardsRight: [],
        deck:[]
      })
      this.createDeck()
    }

  }

  stepTwo = async () => {
    let {deck, ourCardsRight} = this.state
    ourCardsRight = deck.slice(0, 2)
    deck = deck.slice(2)
    await this.setState({
      ourCardsRight,
      deck
    })
  }

  render() {
    let {deck, myCards, hisCards, ourCardsLeft, ourCardsRight, hisCardsShow} = this.state

    return (
      <div className="container">
        <div className="tableBlock">
          <div className="hisCardsBlock blocks">
            <div className="hisCardsBlock blocks backgroundBlock">
              <span className="cardsOnTheTable"/>
              <span className="cardsOnTheTable"/>
            </div>
            {hisCards.length ? hisCards.map(m =>
              <span className="cardsOnTheTable">
                <div className="card">
                  <div className="valueBlock">
                    <span style={{color: m.color}} className="value">{m.value}</span>
                  </div>
                  <img className="suitImg" src={m.suit} alt=""/>
                </div>
                </span>
            ) : null}
          </div>
          <div className="ourCardsBlock blocks">
            <div className="ourCardsLeft blocks">
              {ourCardsLeft.length ? ourCardsLeft.map(m =>
                <span className="cardsOnTheTable">
                <div className="card">
                  <div className="valueBlock">
                    <span style={{color: m.color}} className="value">{m.value}</span>
                  </div>
                  <img className="suitImg" src={m.suit} alt=""/>
                </div>
                </span>
              ) : null}
            </div>
            <div className="ourCardsRight blocks">
              {ourCardsRight.length ? ourCardsRight.map(m =>
                <span className="cardsOnTheTable">
                <div className="card">
                  <div className="valueBlock">
                    <span style={{color: m.color}} className="value">{m.value}</span>
                  </div>
                  <img className="suitImg" src={m.suit} alt=""/>
                </div>
                </span>
              ) : null}
            </div>
          </div>
          <div className="myCardsBlock blocks">
            <div className="myCardsBlock blocks backgroundBlock">
              <span className="cardsOnTheTable"/>
              <span className="cardsOnTheTable"/>
            </div>
            {myCards.length ? myCards.map(m =>
              <span className="cardsOnTheTable">
                <div className="card">
                  <div className="valueBlock">
                    <span style={{color: m.color}} className="value">{m.value}</span>
                  </div>
                  <img className="suitImg" src={m.suit} alt=""/>
                </div>
                </span>
            ) : null}
          </div>
          <img src={table} className="table" alt=""/>
          <button onClick={this.stepOne}>Step 1</button>
          <button onClick={this.stepTwo}>Step 2</button>
        </div>

      </div>
    );
  }
}

export default App;
