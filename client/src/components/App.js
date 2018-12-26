import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Breathe from './Breathe';
import About from './About';
import RelevantLinks from './RelevantLinks';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container body">
            <Route exact path='/' component={Landing} />
            <Route exact path='/breathe' component={Breathe} />
            <Route exact path='/about' component={About} />
            <Route exact path='/relevant-links' component={RelevantLinks} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;
