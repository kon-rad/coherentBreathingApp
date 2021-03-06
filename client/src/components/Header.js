import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google"><li>Login With Google</li></a>;
      default:
        return [
          <li key="2"><a href="/api/logout">Logout</a></li>,
          <li key="3"><a href="/"><img className="avatar" src={this.props.auth.avatar} alt={this.props.auth.username}/></a></li>
        ]
    }
  }

  render () {
    return (
      <nav className="blue lighten-3">
        <div className="nav-wrapper container">
          <ul className="left">
            <li className="nav__logo"><a href="/"><i className="small material-icons">spa</i></a></li>
            <li><a href="/breathe">Breathe</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/relevant-links">Relevant Links</a></li>
          </ul>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth: auth }
}

export default connect(mapStateToProps)(Header);