import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome to Cocktail App</h1>
      <div>
        <img className="cocktail-cover-img" alt="Cocktail" src="cocktails.png"/>
      </div>
      <div>
        <Link to="/cocktail" className="enter">Enter webpage</Link>
      </div>
    </div>
    );
  }
}
export default Intro;