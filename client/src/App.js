import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Intro from './pages/Intro';
import Cocktail from './pages/Cocktail';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path='/cocktail' component={Cocktail}/>
          <Route exact path='/' component={Intro}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;