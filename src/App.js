import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state ={
      pizzasList: [],
      pizzaInfo: {
        topping: '',
        size: '',
        vegetarian: ''
      }
    }
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  fetchPizzas = () => {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzasList => {
        this.setState({
          pizzasList: pizzasList
        })
      })
  }

  handleClick = pizzaInfo => {
    this.setState({
      pizzaInfo: pizzaInfo
    })
  }

  handleToppingAndSizeChange = e => {
    console.log(e.target.value)
    this.setState({
      pizzaInfo: {
        ...this.state.pizzaInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  handleVegetarianChange = () => {
    const vegetarianStatus = this.state.pizzaInfo.vegetarian
    this.setState({
      pizzaInfo: {
        ...this.state.pizzaInfo,
        vegetarian: !vegetarianStatus
      }
    })
    //WHY THIS DOESN'T WORK?
    // this.setState(prevState => {
    //   return {
    //     pizzaInfo: {
    //       ...prevState,
    //       vegetarian: !prevState.vegetarian
    //     }
    //   }
    // })
  }

  

  handleSubmit = (pizzaId) => {
    const newPizzaInfo = {
      topping: this.state.pizzaInfo.topping,
      size: this.state.pizzaInfo.size,
      vegetarian: this.state.pizzaInfo.vegetarian
    }
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPizzaInfo)
    }
    fetch(`http://localhost:3000/pizzas/${pizzaId}`,configObj)
      .then(this.fetchPizzas)
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaInfo={this.state.pizzaInfo} handleSubmit={this.handleSubmit} handleToppingAndSizeChange={this.handleToppingAndSizeChange} handleVegetarianChange={this.handleVegetarianChange}/>
        <PizzaList handleClick={this.handleClick} pizzasList={this.state.pizzasList}/>
      </Fragment>
    );
  }
}
export default App;
