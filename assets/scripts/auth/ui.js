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
  successMessage('Your sign-up was successful. Sign in to play!')
  // $('#sign-up').hide()
  // $('#sign-up-header').hide()
  // $('#after-sign-up').hide()
  $('#sign-up').trigger('reset')
  $('.no-display').hide()
}

const onSignUpFailure = function () {
  failureMessage('Your sign-up was unsuccessful. Please try again.')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  successMessage('You are signed in!')
  store.user = responseData.user // the user object containing the user token
  //  example $("p").hide();
  $('#sign-in').hide()
  $('#sign-in-header').hide()
  $('#after-sign-in').hide()
  $('#sign-up').hide()
  $('#sign-up-header').hide()
  $('#after-sign-up').hide()
  $('#sign-in').trigger('reset')
  $('.no-display').show()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed. Please try again.')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('#change-password').trigger('reset')
  $('#game-message').text('')
}

const onChangePasswordFailure = function () {
  failureMessage('Change password failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('You successfully signed out. Sign in to play again!')
  $('.box').text('')
  $('#game-message').text('')
  $('.no-display').hide()
  $('#sign-in').show()
  $('#sign-in-header').show()
  $('#after-sign-in').show()
  $('#sign-up').show()
  $('#sign-up-header').show()
  $('#after-sign-up').show()
}

const onSignOutFailure = function () {
  failureMessage('Sign-out failed. Please try again.')
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
