import React from 'react';

const cards = props => {

  return (
    <>
      {props.data ? props.data.map((m, index) =>
        <span key={index} className="cardsOnTheTable">
          <div className="card">
            <div className="valueBlock">
              <span style={{color: m.color}} className="value">{m.value}</span>
            </div>
            <img className="suitImg" src={m.suit} alt=""/>
          </div>
        </span>) : null
      }
    </>
  )
}
export default cards;


