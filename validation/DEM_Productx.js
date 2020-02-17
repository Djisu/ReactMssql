const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateDemProductxInput (data) {
  let errors = {}

  data.ProductID = !isEmpty(data.ProductID) ? data.ProductID : ''

  if (Validator.isEmpty(data.ProductID)) {
    errors.ProductID = 'ProductID is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
