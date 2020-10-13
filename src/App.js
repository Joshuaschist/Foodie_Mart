import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeCard from './components/RecipeCard';
import './App.css';

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
        meal: {}
      }  
   }

   componentDidMount(){
    const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    axios.get(URL)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === 'object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
    }

    restartMeal(event) {
      this.setState({meals:[]});
       const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    axios.get(URL)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === 'object'){
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
    }

  render () {
    var data = this.state.meal;
  return (
      <AppContainer className="App">
      <h1>Foodie Mart <span role="img" aria-label="meal">🍜</span></h1>
      {data.length > 0 && <RecipeCard meals={data} />}
      <button type="button" onClick={ this.restartMeal.bind(this) }>
        <span>Reload</span>
      </button>
      <h3>RELOAD for excellent tour on meals, don't forget to click on them for knowledge</h3>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
color: #2251DD;
text-transform: uppercase;
text-align: center;
background: linear-gradient(to right, rgb(141, 226, 141), rgb(221, 34, 34));;
padding: 2em;
`
