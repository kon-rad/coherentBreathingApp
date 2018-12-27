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

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const rootClass = this.props.app.darkTheme ? 'darkTheme' : '';
    // const rootClass = 'darkTheme' ;
    console.log('render App here. state: ', this.props);

    return (
      <BrowserRouter>
        <div className={rootClass}>
          <Header />
          <div className="container">
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
  console.log(state, 'state');
  return { app: state.app };
}

export default connect(mapStateToProps)(App);
