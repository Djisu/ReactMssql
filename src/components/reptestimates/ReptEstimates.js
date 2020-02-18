import React, { Component } from "react";
import axios from "axios";
import SelectListGroup from '../common/SelectListGroup'
//import Select from 'react-select';

class ReptEstimates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transdate: '',
      description: "",
      ProductID: "",
      size: "",
      quantity: 0,
      SquareMetersSold: 0,
      agentno: '',
      units: 0
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.postEstimate = this.postEstimate.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();

    console.log("this.props.ProductName===", this.props.ProductName)
    if (this.state.transdate === 'dd/mm/yyyy'){
      alert("Date cannot be empty")
      return
    }
   /*  if (this.state.description.length === 0){
      alert("Description cannot be empty")
      return
    } */
    /* if (this.state.ProductID.length === 0){
      alert("ProductID cannot be empty")
      return
    }   */
    if (this.state.agentno.length === 0){
      alert("Agent number cannot be empty")
      return
    }      
    const reptEstimatesData = {
      transdate: this.state.transdate,
      description: this.state.description,
      ProductID: this.props.ProductID,
      size:   this.props.ProductName,
      quantity: this.state.quantity,
      SquareMetersSold: this.state.SquareMetersSold,
      agentno:  this.state.agentno,
      units: this.state.units
    };

    this.postEstimate(reptEstimatesData);
  }

  postEstimate(reptEstimatesData) {
    axios
      .post("/api/rept_Estimates/addEstimate", reptEstimatesData)
      .then(response => {
        //console.log('response.data===', response.data)
       /*  if (response.data.recordset.length > 0){   
          console.log("Estimate added successfully")
 */
          this.setState({
            transdate: '',
            description: "",
            ProductID: "",
            size: "",
            quantity: 0,
            SquareMetersSold: 0,
            agentno: '',
            units: 0
          });
      /*  } else {
          console.log("Error in adding estimate!")
       } */
      })
      .catch(function(error) {
        console.log("error===", error);
      });
  }

  render() {
     // Select options for status
     //const { prodID } = this.props.ProductID
     const options = [     
      {label: 'BEDROOM 1', value: 'BEDROOM 1'},
      {label: 'BEDROOM 2', value: 'BEDROOM 2'},
      {label: 'BEDROOM 3', value: 'BEDROOM 3'},
      {label: 'BEDROOM 4', value: 'BEDROOM 4'},
      {label: 'BEDROOM 5', value: 'BEDROOM 5'},
      {label: 'VERANDA', value: 'VERANDA'},
      {label: 'COMPOUND', value: 'COMPOUND'}
    ]

    return (
      <div className="col-xs-2">
        <form>
          <h5>Estimate Details</h5>
          <p>
           
            <input
              type="date"
              placeholder="Date"
              name="transdate"
              value={this.state.transdate}
              onChange={this.onChange}
            />
          </p>       
          
           
            {/* <input
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            /> */}
            Description
            <SelectListGroup
                  placeholder='Description'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                  options={options}                 
                />
         {/*  <p>
            
            <input
              type="text"
              placeholder={this.props.ProductID}//"ProductID"
              name="ProductID"
              value={prodID}  //{this.props.ProductID}
              onChange={this.onChange}
            />
          </p> */}
          {/* <p>
            Size
            <input
              type="text"
              placeholder="size"
              name="size"
              value={this.state.size}
              onChange={this.onChange}
            />
          </p> */}
          <p>
            Quantity
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.onChange}
            />
            
          </p>
          <p>
            Square Meters Sold
            <input
              type="number"
              placeholder="Square Meters Sold"
              name="SquareMetersSold"
              value={this.state.SquareMetersSold}
              onChange={this.onChange}
            />
            
          </p>
          <p>
            Agent's Number
            <input
              type="text"
              placeholder="Agent's Number"
              name="agentno"
              value={this.state.agentno}
              onChange={this.onChange}
            />
          </p>
          <p>
            units Sold
            <input
              type="number"
              placeholder="units Sold"
              name="units"
              value={this.state.units}
              onChange={this.onChange}
            />
            
          </p>

          <button
            className="btn btn-info btn-primary"
            onClick={this.handleClick}
          >
            Send Agent's Estimate
          </button>
        </form>
      </div>
    );
  }
}

export default ReptEstimates;
