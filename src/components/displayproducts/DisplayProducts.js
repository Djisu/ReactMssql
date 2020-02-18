import React, { Component } from "react";
import axios from "axios";

class DisplayProducts extends Component {
  constructor() {
    super();

    this.state = {
      products: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // console.log("in handleClick");
    axios.post("/api/Display_Products/displayProducts").then(response => {
      //console.log("response.data.recordset===", response.data.recordset);
      if (response.data.recordset.length > 0) {
        this.setState({
          products: response.data.recordset
        });
      }
    });
  }
  render() {
    // console.log('Object.keys(this.state.products)===', Object.keys(this.state.products))
    //const { data } = this.state.products;

    let newArr = []
    for (let i = 0; i < this.state.products.length; i++) {
      newArr.push(this.state.products[i])
    }

    console.log("typeof newArr===", typeof newArr);

    //console.log("productname===", productname)
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-2 m-auto">
              <p>List of New Products</p>
               {newArr.map((d, index) => {
                  return (
                  <div key={index}>     
                      <img  src={d.pictureplace} alt='New Tile' />             
                      <li key={index}>{d.ProductID}</li>
                      <li key={index}>{d.ProductName}</li>
                    </div> 
                   
                  )}             
              )} 
                
              <button className="btn btn-primary" onClick={this.handleClick}>
                Display New Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayProducts;
