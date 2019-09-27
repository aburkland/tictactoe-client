'use strict'
const store = require('../store')

const successMessage = function (newText) {
  // a helper reusable function to display text
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // reset form below so info clears from form
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onCreateGameSuccess = function (responseData) {
  successMessage('New game created successfully!')
  store.game = responseData.game
  console.log(store.game)
}

const onCreateGameFailure = function () {
  failureMessage('New game creation failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log(store.game)
  console.log('here')
}
// onUpdateGameFailure

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess
}
