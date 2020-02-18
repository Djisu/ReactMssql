import React from 'react'
import axios from "axios";

const getProducts = () => {
    console.log("in getProducts");
  axios
  .post("/api/Display_Products/displayProducts")
  .then(response => {
    //console.log("typeof response.data.recordset===", typeof response.data.recordset);

    if (response.data.recordset.length > 0) {
      return response.data.recordset
      //console.log(response.data.recordset[0]["ProductName"])
      /* this.setState({
        pictureplace: response.data.recordset[0]["pictureplace"],
        ProductID: response.data.recordset[0]["ProductID"],
        ProductName: response.data.recordset[0]["ProductName"],
        piecesinbox: response.data.recordset[0]["piecesinbox"],
        UnitsInStock: response.data.recordset[0]["UnitsInStock"] 
      }); */
    } else {
      console.log("Records not found");
    }
  })
  .catch(function(error) {
    console.log("error===", error);
  });
}
export default getProducts
