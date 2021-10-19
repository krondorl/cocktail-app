import React, { Component } from 'react';

class Cocktail extends Component {
  constructor(props){
    super(props);
    this.state = {
      cocktail: []
    }
  }

  componentDidMount() {
    this.random();
  }

  random = () => {
    fetch('/api/cocktail?mode=random')
    .then(res => res.json())
    .then(cocktail => {
      this.setState({ cocktail: cocktail });
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
        {this.state.cocktail?.drinks ? (
          <div>
            <h2>{this.state.cocktail.drinks[0].strDrink}</h2>
            <div><img alt={this.state.cocktail.drinks[0].strDrink} src={this.state.cocktail.drinks[0].strDrinkThumb} /></div>
            <div>
              <table>
                <thead>
                  <th>
                    <td></td>
                    <td></td>
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure1}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient1}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure2}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient2}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure3}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient3}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure4}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient4}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure5}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient5}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure6}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient6}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure7}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient7}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure8}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient8}</td>
                  </tr>
                  <tr>
                    <td>{this.state.cocktail.drinks[0].strMeasure9}</td>
                    <td>{this.state.cocktail.drinks[0].strIngredient9}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          ) : (
            <div>
              <p>No cocktails found</p>
            </div>
          )
        }
      </div>
    </div>
    );
  }
}
export default Cocktail;