'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// let gameBoardArray = ['', '', '', '', '', '', '', '', '']

// win conditions
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let currentPlayer = 'X'
const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const checkWin = function () {
  const space0 = $('#0').text()
  const space1 = $('#1').text()
  const space2 = $('#2').text()
  const space3 = $('#3').text()
  const space4 = $('#4').text()
  const space5 = $('#5').text()
  const space6 = $('#6').text()
  const space7 = $('#7').text()
  const space8 = $('#8').text()

  if (space0 === space1 && space0 === space2) {
    if (space0 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space3 === space4 && space3 === space5) {
    if (space3 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space6 === space7 && space6 === space8) {
    if (space6 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space0 === space3 && space0 === space6) {
    if (space0 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space1 === space4 && space1 === space7) {
    if (space1 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space2 === space5 && space2 === space8) {
    if (space2 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space0 === space4 && space0 === space8) {
    if (space0 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
  if (space2 === space4 && space2 === space6) {
    if (space2 === 'X') {
      console.log('X wins')
    } else {
      console.log('O wins')
    }
  }
}

// create function to track click
const onClickBoard = function (event) {
  event.preventDefault()
  // do not allow users to add an X or O to an invalid space
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)

    checkWin()

    const currentTurn = currentPlayer

    changePlayer()

    api.updateGame(event.target.id, currentTurn) // need to add game state param
      .then(ui.onUpdateGameSuccess) // (() => {
    // checkWin() // need to understand
      // })
      .catch(console.log)
  } else {
    console.log('this box is occupied already') // need to add ui function
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
