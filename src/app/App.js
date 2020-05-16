import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import WelcomePage from '../pages/welcomepage/welcomepage';
import HomePage from '../pages/homepage/homepage';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/" component={} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} /> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
