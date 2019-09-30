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

// checkWin returns 'X' for X wins or 'O' for O wins or '' for no win yet
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
      // $('#game-message').text('X wins')
      return 'X'
    } else if (space0 === 'O') {
      // $('#game-message').text('O wins')
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

// checkTie returns false if there is not a tie, returns true if there is a tie
const checkTie = function () {
  const space0 = $('#0').text()
  const space1 = $('#1').text()
  const space2 = $('#2').text()
  const space3 = $('#3').text()
  const space4 = $('#4').text()
  const space5 = $('#5').text()
  const space6 = $('#6').text()
  const space7 = $('#7').text()
  const space8 = $('#8').text()

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

// onClickBoard checks to see if a game is stored and if the game is active
const onClickBoard = function (event) {
  event.preventDefault()
  if (store.game && store.game.over === false) {
    // do not allow users to add an X or O to an invalid space
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)

      // winner is storing 'X' or 'O' or ''
      const winner = checkWin()

      // gameOver is assigned true or false
      let gameOver = winner !== ''
      if (winner === '') {
        if (checkTie()) {
          // handle tie here; ui message;
          gameOver = true
          $('#game-message').text('It is a tie game.')
        } else if (!checkTie()) {
          gameOver = false
          // console.log('game is not over')
          //  $('#game-message').text(currentPlayer + "'s turn")
        }
      }
      if (gameOver) {
        // if it's a tie, send tie message; if not a tie, send win message
        if (checkTie()) {
          $('#game-message').text('It is a tie game.')
        } else {
          // $('#game-message').text(winner + ' wins')
          ui.onGameIsOver(currentPlayer)
        }
      }

      const currentTurn = currentPlayer

      changePlayer()
      if (gameOver === false) {
        ui.onCurrentPlayerTurn(currentPlayer)
      }

      api.updateGame(event.target.id, currentTurn, gameOver)
        .then(ui.onUpdateGameSuccess) // (() => {
      // checkWin() // need to understand
        // })
        .catch(ui.onUpdateGameFailure)
    } else {
      ui.onBoxOccupied() // need to remove message once good move is made
    }
  }
}

const onGamesPlayed = function () {
  event.preventDefault()
  api.getGamesPlayed()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onCreateGame,
  onClickBoard,
  onGamesPlayed
}
