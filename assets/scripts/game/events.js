'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// const gameBoardArray = ['', '', '', '', '', '', '', '', '']
// gameBoardArray = store.game.cells
// console.log(gameBoardArray)

// win conditions
// const winCombos = [
//     [0, 1, 2]
//     [3, 4, 5]
//     [6, 7, 8]
//     [0, 3, 6]
//     [1, 4, 7]
//     [2, 5, 8]
//     [0, 4, 8]
//     [2, 4, 6]
// ]

let currentPlayer = 'X'
const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

// const checkWin = function () {
//   console.log('basic functionality works')
// edit here
// if (number of moves >= 3) {
// check to see if cells array matches one of the win combos
// }
// }

// create function to track click
const onClickBoard = function (event) {
  event.preventDefault()
  // do not allow users to add an X or O to an invalid space
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    // update/patch const updateGame = function () {}
    api.updateGame(event.target.id, currentPlayer)
      .then(console.log) // (ui.onUpdateGameSuccess)// (() => {
    // checkWin() // need to understand
      // })
      .catch(console.log)
    changePlayer()
  } else {
    console.log('this box is occupied already') // need to add ui function
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
