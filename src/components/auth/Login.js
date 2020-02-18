import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
//import { loginUser } from '../../actions/authActions'
import axios from "axios";

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      OperatorID: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const userData = {
      OperatorID: this.state.OperatorID,
      password: this.state.password
    };

    this.loginUser(userData);
  }
  loginUser(userData, history) {
    axios
      .post("/api/Operator_definition/login", userData)
      .then(response => {
        if (response.data.recordset.length > 0) {
          window.location.href = "/demproductx";
        } else {
          alert("Invalid login");
        }
      })
      .catch(err => console.log("Invalid login"));
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-2 m-auto">
              <form>
                <p className="display-6 text-center">Beauty House Log In</p>
                <div className="col-md-4">
                  <label>UserName:</label>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="OperatorID"
                    value={this.state.OperatorID}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-4">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <br />
              </form>
              
              <button className="btn btn-info btn-block mt-4" onClick={this.handleClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//export default Login;
export default withRouter(Login);
