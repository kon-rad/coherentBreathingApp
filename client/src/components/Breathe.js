import React, { Component } from 'react';

class Breathe extends Component {

  render () {
    return (
      <div className="container">
        breathe app
        <div className="breathe__inner">
          <div className="breathe__time_view">
            <input type="number" name="time" />
          </div>
          <div className="breathe__time_set">
            <input type="range" interval="100"/>
          </div>
          <div className="breathe__start">
            <button><i className="small material-icons">spa</i>Start</button>
          </div>
          <div className="breathe__center">
            <div className="breathe">
              <div className="breathe__counter"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Breathe;