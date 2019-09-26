'use strict'
const config = require('../config.js')
const store = require('../store')

const createGame = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  createGame
}
