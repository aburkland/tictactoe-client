'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

let currentPlayer = 'X'

const changePlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}
// onCreateGame removes all X and O from gameboard, starts a new game with
// X as the first player to go
const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').text('')
  currentPlayer = 'X'
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
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

// checkTie returns false if there is not a tie, returns true if there
// are no empty strings
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
  // false if there is an empty string
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
    // if space is blank, then add the X or O
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      // save value to currentTurn to send to API
      const currentTurn = currentPlayer
      // winner is storing 'X' or 'O' for winner or ''
      const winner = checkWin()

      // gameOver is assigned true or false
      // if gameOver is true, that means X or O has won the game
      // if gameOver is false, there could be a tie or more moves to be played
      let gameOver = winner !== ''
      if (gameOver) {
        // shows winning message on screen
        // if gameOver is true, there is a winner
        ui.onGameIsOver(currentPlayer)
      } else if (checkTie()) {
        // if gameOver is not true, that means we don't have a winner
        // then if checkTie is true, the game board is full and we set gameOver to true
        // show tie message on screen
        gameOver = true
        // $('#game-message').text('It is a tie game.')
        ui.onGetTieMessage()
      } else {
        // if gameOver is not true and there are spaces to click on board then
        // we should alternate players and show the next player's turn to go
        changePlayer()
        ui.onCurrentPlayerTurn(currentPlayer)
      }

      // sending move index, player X or O, gameOver status to API
      api.updateGame(event.target.id, currentTurn, gameOver)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)
    } else {
      // show box is occupied message and tell user to choose a different space
      ui.onBoxOccupied()
    }
  } else {
    // $('#game-message').text("You must click the 'New Game' button to play.")
    ui.onMustStartGameMessage()
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
