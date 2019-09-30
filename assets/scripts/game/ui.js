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
  console.log(store.game)
}

const onCreateGameFailure = function () {
  failureMessage('New game creation failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  // $('#update-message').text('Game was updated successfully!')
}

const onUpdateGameFailure = function () {
  $('#update-message').text('Game was not updated in API')
  // need to fix so nothing is console'd
}

const onBoxOccupied = function () {
  failureMessage('This space is already taken. Choose an empty space!')
}

const onCurrentPlayerTurn = function (currentPlayer) {
  $('#game-message').removeClass('failure')
  $('#game-message').removeClass('success')
  $('#game-message').text(currentPlayer + "'s turn!")
}

const onGameIsOver = function (currentPlayer) {
  successMessage(currentPlayer + " wins! Press 'New Game' button to play again!")
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
  onCurrentPlayerTurn
}
