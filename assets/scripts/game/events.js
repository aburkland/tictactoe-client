'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  currentPlayer = 'X'
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'X'

const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const space0 = $('#0').text()
const space1 = $('#1').text()
const space2 = $('#2').text()
const space3 = $('#3').text()
const space4 = $('#4').text()
const space5 = $('#5').text()
const space6 = $('#6').text()
const space7 = $('#7').text()
const space8 = $('#8').text()

const checkWin = function () {
  if (space0 === space1 && space0 === space2) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space3 === space4 && space3 === space5) {
    if (space3 === 'X') {
      return 'X'
    } else if (space3 === 'O') {
      return 'O'
    }
  }
  if (space6 === space7 && space6 === space8) {
    if (space6 === 'X') {
      return 'X'
    } else if (space6 === 'O') {
      return 'O'
    }
  }
  if (space0 === space3 && space0 === space6) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space1 === space4 && space1 === space7) {
    if (space1 === 'X') {
      return 'X'
    } else if (space1 === 'O') {
      return 'O'
    }
  }
  if (space2 === space5 && space2 === space8) {
    if (space2 === 'X') {
      return 'X'
    } else if (space2 === 'O') {
      return 'O'
    }
  }
  if (space0 === space4 && space0 === space8) {
    if (space0 === 'X') {
      return 'X'
    } else if (space0 === 'O') {
      return 'O'
    }
  }
  if (space2 === space4 && space2 === space6) {
    if (space2 === 'X') {
      return 'X'
    } else if (space2 === 'O') {
      return 'O'
    }
  }
  return ''
}

const checkTie = function () {
  // check to see if board spaces have empty string and return
  // false if there is no empty string
  if (
    space0 === '' ||
    space1 === '' ||
    space2 === '' ||
    space3 === '' ||
    space4 === '' ||
    space5 === '' ||
    space6 === '' ||
    space7 === '' ||
    space8 === ''
  ) {
    return false
  }
  // check for win first
  return true
}

// create function to track click
const onClickBoard = function (event) {
  event.preventDefault()
  if (store.game && store.game.over === false) {
    // do not allow users to add an X or O to an invalid space
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)

      const winner = checkWin()
      let gameOver = winner !== ''
      if (winner === '') {
        if (checkTie()) {
          // handle tie here; ui message;
          gameOver = true
        }
      }
      if (gameOver) {
        // if it's a tie, send tie message; if not a tie, send win message
        console.log(winner + ' wins!') /// convert to message on UI
      }

      const currentTurn = currentPlayer

      changePlayer()

      api.updateGame(event.target.id, currentTurn, gameOver)
        .then(ui.onUpdateGameSuccess) // (() => {
      // checkWin() // need to understand
        // })
        .catch(console.log)
    } else {
      console.log('this box is occupied already') // need to add ui function
    }
  }
}

module.exports = {
  onCreateGame,
  onClickBoard
}
