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
          <Route exact path='/' component={Intro}/>
          <Route path='/cocktail' component={Cocktail}/>
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