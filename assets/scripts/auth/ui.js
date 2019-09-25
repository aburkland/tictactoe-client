'use strict'
const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('You are successfully signed up!')
}

const onSignUpFailure = function () {
  failureMessage('Your sign-up was unsuccessful.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user // the user object containing the user token
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
}

const onSignOutFailure = function () {
  failureMessage('Sign-out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
