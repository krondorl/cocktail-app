import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome to Cocktail App</h1>
      <div>
        <Link to="/cocktail">Enter</Link>
      </div>
    </div>
    );
  }
}
export default Intro;