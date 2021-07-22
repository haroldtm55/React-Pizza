import React from "react"

const PizzaForm = ({pizzaInfo,handleToppingAndSizeChange,handleVegetarianChange,handleSubmit}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input name='topping' onChange={e => handleToppingAndSizeChange(e)} value={pizzaInfo.topping} type="text" className="form-control" placeholder="Pizza Topping" />
        </div>
        <div className="col">
          <select name='size' onChange={e => handleToppingAndSizeChange(e)} value={pizzaInfo.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={e => handleVegetarianChange(e)} className="form-check-input" type="radio" value="Vegetarian" checked={pizzaInfo.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={() => handleVegetarianChange()} className="form-check-input" type="radio" value="Not Vegetarian" checked={!pizzaInfo.vegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>handleSubmit(pizzaInfo.id)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
