import React, { Component } from "react";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";
import ReptEstimates from "../reptestimates/ReptEstimates";
import axios from "axios";
//import DisplayProducts from './DisplayProducts'

//import { getProduct } from "../../actions/demproductxActions";

class DemProductx extends Component {
  constructor() {
    super();

    this.state = {
      pictureplace: "",
      ProductID: "",
      ProductName: "",
      piecesinbox: 0,
      UnitsInStock: 0
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.PostProduct = this.PostProduct.bind(this);
    this.showNewProducts = this.showNewProducts.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  PostProduct(productData) {
    axios
      .post("/api/DEM_Productx/findProduct", productData)
      .then(response => {
        // console.log("response.data.recordset[0][ProductID]===", response.data.recordset[0]["ProductID"]);

        if (response.data.recordset.length > 0) {
          //console.log(response.data.recordset[0]["ProductName"])
          this.setState({
            pictureplace: response.data.recordset[0]["pictureplace"],
            ProductID: response.data.recordset[0]["ProductID"],
            ProductName: response.data.recordset[0]["ProductName"],
            piecesinbox: response.data.recordset[0]["piecesinbox"],
            UnitsInStock: response.data.recordset[0]["UnitsInStock"]
          });
        } else {
          console.log("Invalid login");
        }
      })
      .catch(function(error) {
        console.log("error===", error);
      });
  }

  handleClick(e) {
    e.preventDefault();

    if (this.state.ProductID.length === 0) {
      alert("Enter the product id");
      return;
    }

    const productData = {
      ProductID: this.state.ProductID
    };
    this.PostProduct(productData);
  }

  showNewProducts(e) {
     console.log('in showNewProducts')
    e.preventDefault();
   
    window.location.href = "/DisplayProducts";
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-2 m-auto">
              <form>
                <h5>Product Search</h5>

                <input
                  type="text"
                  placeholder="Product Id"
                  name="ProductID"
                  value={this.state.ProductID}
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-info btn-block mt-4"
                  onClick={this.handleClick}
                >
                  Send
                </button>
                <button
                  className="btn btn-info btn-block mt-4"
                  onClick={this.showNewProducts}
                >
                  Show New Products
                </button>
              </form>
              <br />
              <div>
                <img className='img'
                  src={this.state.pictureplace}
                  alt="Tile"
                  
                />
                <div>
                  <label id="element1">
                    ProductID:
                    <br />
                   
                  </label>
                  <p className="centerText"> {this.state.ProductID}</p>
                </div>

                <div>
                  <label id="element1">
                    Units in a box:
                    <br />
                   
                  </label>
                  <p className="centerText"> {this.state.piecesinbox}</p>
                </div>

                <div>
                  <label id="element1">
                    Size:
                    <br />
                    
                  </label>
                  <p className="centerText">{this.state.ProductName}</p>
                </div>

                <div>
                  <label id="element1">
                    Balance:
                    <br />
                    
                  </label>
                  <p className="centerText">{this.state.UnitsInStock}</p>
                </div>

                <ReptEstimates ProductID={this.state.ProductID} ProductName={this.state.ProductName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemProductx;
