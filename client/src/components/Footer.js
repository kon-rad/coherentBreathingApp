import React from 'react';

const year = (new Date()).getFullYear();

export default () => {
  return (
    <footer className="page-footer blue lighten-3">
      <div className="container">
        <div className="row">
          <div className="col 16 s12">
            <h5 className="white-text"><i className="small material-icons">spa</i>    Coherent Breathing Co.</h5>
            <p className="grey-text-text-lighten-4">Just Breathe</p>
          </div>
          <div className="col 14 offset-12 s12">
            <ul>
              <li><a href="/" className="grey-text text-lighten-3">Home</a></li>
              <li><a href="/breathe" className="grey-text text-lighten-3">Breathe</a></li>
              <li><a href="/about" className="grey-text text-lighten-3">About</a></li>
              <li><a href="/relevant-links" className="grey-text text-lighten-3">Relevant Links</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy;{year} Coherent Breathing Co.
        </div>
      </div>
    </footer>
  )
}