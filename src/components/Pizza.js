import React from "react"

const Pizza = ({pizzaInfo,handleClick}) => {
  return(
    <tr>
      <td>{pizzaInfo.topping}</td>
      <td>{pizzaInfo.size}</td>
      <td>{pizzaInfo.vegetarian ? 'Yes' : 'No'}</td>
      <td><button onClick={()=>handleClick(pizzaInfo)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
