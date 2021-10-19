import React, { Component } from 'react';

class Cocktail extends Component {
  constructor(props){
    super(props);
    this.state = {
      random: []
    }
  }

  componentDidMount() {
    this.random();
  }

  random = () => {
    fetch('/api/cocktail?mode=random')
    .then(res => res.json())
    .then(cocktail => {
      this.setState({ random: cocktail });
      console.log(cocktail)
    });
  }

  render() {
    return (
    <div className="App">
      <h1>Cocktail App</h1>
      <div>
        <button onClick={this.random}>New random</button>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.search}>Search</button>
      </div>
      <div>
      </div>
    </div>
    );
  }
}
export default Cocktail;