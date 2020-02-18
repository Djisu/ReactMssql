import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import { logoutUser } from '../../actions/authActions'

class Navbar extends Component {


  render () {
  
    const guestLinks = (
      <ul className='navbar-nav ml-auto'>
       
       {/*  <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li> */}
      </ul>
    )

    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
             Beauty House Agents
          </Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#mobile-nav'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='mobile-nav'>           
            {guestLinks}
          </div>
        </div>
      </nav>
    )
  }
}

/* Navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})
 */
export default Navbar
//export default connect(mapStateToProps)(Navbar)
