import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Settings extends Component {

  render() {
    console.log('Settings here: props: ', this.props);
    const themeBtnText = this.props.darkTheme ? 'Light Theme' : 'Dark Theme';
    return (
      <div className="col s6 offset-s3 settings__wrapper">
        <a onClick={this.props.toggleTheme} className="waves-effect waves-light btn">{themeBtnText}</a>
        <a onClick={() => this.props.preSetTime(1)} className="waves-effect waves-light btn">1 Minute</a>
        <a onClick={() => this.props.preSetTime(5)} className="waves-effect waves-light btn">5 Minutes</a>
        <a onClick={() => this.props.preSetTime(15)} className="waves-effect waves-light btn">15 Minutes</a>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { darkTheme: state.app.darkTheme };
}

export default connect(mapStateToProps, actions)(Settings);