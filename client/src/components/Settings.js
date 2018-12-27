import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Settings extends Component {

  render() {
    console.log('Settings here: props: ', this.props);
    return (

      <div className="col s6 offset-s3">
        <a onClick={this.props.toggleTheme} className="waves-effect waves-light btn">Dark Theme</a>
      </div>
    )
  }
}

export default connect(null, actions)(Settings);