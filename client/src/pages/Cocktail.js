import React, { Component } from 'react';

class Cocktail extends Component {
  render() {
    return (
    <div className="App">
      <h1>Cocktail App</h1>
      <div>
        <button onClick={this.random}>New random</button>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.search}>Search</button>
      </div>
      <div></div>
    </div>
    );
  }
}
export default Cocktail;