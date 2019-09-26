'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)

  api.createGame(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const cells = ['', '', '','', '', '', '', '', '']

// create function to track click
const onClickBoard = function (event) {
  event.preventDefault()
  console.log('you clicked me')
  // do not allow users to add an X or O to an invalid space
  //
}


module.exports = {
  onCreateGame,
  onClickBoard
}
