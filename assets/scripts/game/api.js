'use strict'
const config = require('../config.js')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/:' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
