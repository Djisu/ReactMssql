import axios from 'axios'

export const loginUser = (userData, history) => dispatch => {
    console.log('in loginUser')
    axios
      .post("/Operator_definition/login", userData)
      .then(res => history.push('/DEM_Productx'))
      .catch((err) =>
        console.log('Invalid login') 
      )
  }