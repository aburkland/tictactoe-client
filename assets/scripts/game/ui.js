'use strict'
const store = require('../store')

const successMessage = function (newText) {
  // a helper reusable function to display text
  $('#game-message').text(newText)
  $('#game-message').removeClass('failure')
  $('#game-message').addClass('success')
  // reset form below so info clears from form
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#game-message').text(newText)
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
}

const onCreateGameSuccess = function (responseData) {
  successMessage('New game created successfully! X goes first!')
  store.game = responseData.game
  console.log(responseData)
}

const onCreateGameFailure = function () {
  failureMessage('New game creation failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  // do not send success message as it will confuse the user
}

const onUpdateGameFailure = function () {
  failureMessage('Error: game was not updated in API')
}

const onBoxOccupied = function () {
  failureMessage('This space is already taken. Choose an empty space!')
}

const onCurrentPlayerTurn = function (currentPlayer) {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text('It is ' + currentPlayer + "'s turn to choose a space!")
}

const onGameIsOver = function (currentPlayer) {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  successMessage(currentPlayer + " wins! Press 'New Game' button to play again!")
}

const onGetTieMessage = function () {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text('It is a tie game.')
}

const onMustStartGameMessage = function () {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text("You must click the 'New Game' button to play.")
}

const onGetGamesSuccess = function (response) {
  $('#get-games-played').text('Games Played: ' + response.games.length)
}

const onGetGamesFailure = function () {
  $('#get-games-played').text('Game history retrieval failed')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onBoxOccupied,
  onGetGamesSuccess,
  onGetGamesFailure,
  onGameIsOver,
  onGetTieMessage,
  onMustStartGameMessage,
  onCurrentPlayerTurn
}
