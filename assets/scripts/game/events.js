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

//   const gameBoard = [
//     '', '', '',
//     '', '', '',
//     '', '', ''
// ]

// create function to track move

module.exports = {
  onCreateGame
}
