curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'
