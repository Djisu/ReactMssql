//const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateReptEstimatesInput (data) {
  let errors = {}

  /*  transdate: Date.now(),
      description: this.state.description,
      ProductID: this.state.ProductID,
      size: this.state.size,
      quantity: this.state.quantity,
      SquareMetersSold: this.state.SquareMetersSold,
      units: this.state.units */

  data.description = !isEmpty(data.description) ? data.description : ''
  data.ProductID = !isEmpty(data.ProductID) ? data.ProductID : ''
  data.size = !isEmpty(data.size) ? data.size : ''
  data.quantity = !isEmpty(data.quantity) ? data.quantity : 0
  data.SquareMetersSold = !isEmpty(data.SquareMetersSold) ? data.SquareMetersSold : 0
  data.units = !isEmpty(data.units) ? data.units : 0

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required'
  }

  if (Validator.isEmpty(data.ProductID)) {
    errors.ProductID = 'ProductID field is required'
  }

  if (Validator.isEmpty(data.size)) {
    errors.size = 'Size field is required'
  }
  if (Validator.isEmpty(data.quantity)) {
    errors.quantity = 'Quantity field is required'
  }
  if (Validator.isEmpty(data.SquareMetersSold)) {
    errors.SquareMetersSold = 'SquareMetersSold field is required'
  }
  if (Validator.isEmpty(data.units)) {
    errors.units = 'units field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
