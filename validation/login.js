const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateLoginInput (data) {
  let errors = {}

  data.operatorID = !isEmpty(data.operatorID) ? data.operatorID : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  if (Validator.isEmpty(data.operatorID)) {
    errors.operatorID = 'operatorID field is required'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
