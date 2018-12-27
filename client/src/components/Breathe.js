import React, { Component } from 'react';
import Settings from './Settings';

const TICK_INTERVAL = 1000;

class Breathe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      timeSet: 5 * 60 * 1000,
      timerInterval: null,
      currentTime: 0,
      startTime: 0
    };

    this.updateTime = this.updateTime.bind(this);
    this.toggleTime = this.toggleTime.bind(this);
    this.isActive = this.isActive.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.endTimer = this.endTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  updateTime(e) {
    this.setState({ timeSet: e.target.value, currentTime: e.target.value });
  }
  toggleTime() {
    this.state.active ? this.endTimer() : this.startTimer();
  }
  isActive() {
    const activeClass = this.state.active ? 'active' : '';
    return 'breathe ' + activeClass;
  }
  startTimer() {
    if (!this.state.timerInterval) {
      this.setState({ active: true, timerInterval: setInterval(this.tick, TICK_INTERVAL), currentTime: this.state.timeSet });
    }
  }
  endTimer() {
    clearInterval(this.state.timerInterval);
    this.setState({ timerInterval: null, active: false, currentTime: 0 });
  }
  tick() {
    if (this.state.currentTime <= 0) {
      this.endTimer();

      return;
    }
    let currentTime = this.state.currentTime - 1000;
    this.setState({ currentTime: currentTime });
  }
  renderTime() {
    let time = this.state.timeSet;
    if (this.state.active) {
      time = this.state.currentTime;
    }
    let minutes = Math.floor(time / 60000);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = (time / 1000) % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return (
      <div className="breathe__time_render">
        {minutes} : {seconds}
      </div>
    )
  }

  render () {
    return (
      <div className="breathe__inner">
        <div className="row">
          <Settings />
          <div className="breathe__time">
            {this.renderTime()}
          </div>
          <div className="breathe__time_set">
            <input value={this.state.timeSet} onChange={this.updateTime} type="range" min="0" max={20 * 60 * 1000} step={60 * 1000} />
          </div>
          <div className="breathe__start">
            <button onClick={this.toggleTime}><i className="small material-icons">spa</i><span>{this.state.active ? 'Stop' : 'Start'}</span></button>
          </div>
          <div className="breathe__center">
          <div className={this.isActive()}>
            <div className="breathe__counter"></div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Breathe;