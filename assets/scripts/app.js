'use strict'
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#box-one').click(function () {
    if ($('#0').text() === 'x') {
      console.log('there is an x here already')
    } else {
      $('#0').text('x')
      console.log('x')
    }
  })

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('#0').on('click', gameEvents.onClickBoard)
  $('#1').on('click', gameEvents.onClickBoard)
  $('#2').on('click', gameEvents.onClickBoard)
  $('#3').on('click', gameEvents.onClickBoard)
  $('#4').on('click', gameEvents.onClickBoard)
  $('#5').on('click', gameEvents.onClickBoard)
  $('#6').on('click', gameEvents.onClickBoard)
  $('#7').on('click', gameEvents.onClickBoard)
  $('#8').on('click', gameEvents.onClickBoard)
})
