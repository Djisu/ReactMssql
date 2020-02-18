import React from "react"


const ProductItem = (props) => {
    return (
      <div>
          <img src={props.item.pictureplace} alt="New Tile" />
          <li>{props.item.ProductID}</li>
          <li>{props.item.ProductName}</li>        
      </div>
    )
}

export default ProductItem