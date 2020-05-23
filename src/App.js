import React from 'react';

import {
  BrowserRouter as Router, Route, Link,
    } from 'react-router-dom';

import './Assets/css/main.css';
import Navbar from './components/pages/navbar';
import Content from './components/pages/content';
import NavbarLogin from './components/pages/login-nav';



function App() {
  return (
    <Router>
    <section className="App">

    <Route exact path="/" component={Navbar} />


    <Content />
  
    </section>
    </Router>
  );
}

export default App;
