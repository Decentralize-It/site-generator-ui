import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import Main from './components/commons/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
              <div className="container">
                <Main/>
              </div>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
