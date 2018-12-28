import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Breathe from './Breathe';
import About from './About';
import RelevantLinks from './RelevantLinks';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentDidMount() {
    console.log('app props', this.props);
    this.props.fetchUser();
  }
  render() {
    const rootClass = this.props.darkTheme ? 'root dark-theme' : 'root normal-theme';

    return (
      <BrowserRouter>
        <div className={rootClass}>
          <Header />
          <div className="container container__root">
            <Route exact path='/' component={Landing} />
            <Route exact path='/breathe' component={Breathe} />
            <Route exact path='/about' component={About} />
            <Route exact path='/relevant-links' component={RelevantLinks} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return { darkTheme: state.app.darkTheme };
}

export default connect(mapStateToProps, actions)(App);
