import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  
  render() {
    const {pizzasList} = this.props
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzasList.map((pizzaInfo, idx) => <Pizza key={idx} pizzaInfo={pizzaInfo} handleClick={this.props.handleClick}/>)
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

 //IS THERE A WAY TO FETCH AND RE RENDER AFTER CHANGE HERE?
  
  // constructor() {
  //   super() 
  //     this.state = {
  //       pizzaList: []
  //     }
  // }
  // componentDidMount() {
  //   this.fetchPizzas()
  // }
  
  // fetchPizzas = () => {
  //   fetch('http://localhost:3000/pizzas')
  //     .then(resp => resp.json())
  //     .then(pizzaList => {
  //       this.setState({
  //         pizzaList: pizzaList
  //       })
  //     })
  // }