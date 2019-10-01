const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignUp = function (event) {
  event.preventDefault()
  $('.box').text('')
  $('.blur').blur()
  const form = event.target

  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.box').text('')
  const form = event.target

  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('.box').text('')
  $('.blur').blur()
  const form = event.target

  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  $('.box').text('')
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
