import React from 'react';

import {
  BrowserRouter as Router, Route, Link,
    } from 'react-router-dom';

import './Assets/css/main.css';
import Header from './components/headerComponent/header';
import Content from './components/contentComponent/content';



function App() {
  return (
    <Router>
    <section className="App">
     
     <Header /> 

    <Content />
  
    </section>
    </Router>
  );
}

export default App;
