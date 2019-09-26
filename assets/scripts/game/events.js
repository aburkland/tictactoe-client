'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const cells = ['', '', '','', '', '', '', '', '']
let currentPlayer = 'X'
const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// create function to track click
const onClickBoard = function (event) {
  event.preventDefault()
  // do not allow users to add an X or O to an invalid space
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    // update/patch const updateGame = function () {}
    api.updateGame(event.target.id, currentPlayer)
      .then(console.log)
      .catch(console.log)
    changePlayer()
  } else {
    console.log('this box is occupied already')
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
