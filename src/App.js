import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/commons/Footer';
import Header from './components/commons/Header';
import Sidebar from './components/commons/Sidebar';
import Main from './components/commons/Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
