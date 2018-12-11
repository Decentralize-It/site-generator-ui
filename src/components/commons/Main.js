import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home'

const Main = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/about/" component={About} />
    <Route path="/contact/" component={Contact} />
  </div>
)

export default Main;
