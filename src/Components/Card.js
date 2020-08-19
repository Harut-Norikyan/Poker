import React from 'react';

const card = props => {
  return (
    <>
      {props.data ? props.data.map(m =>
        <span key={m.value + Math.random()} className="cardsOnTheTable">
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
export default card;
