# added placeholders for id, token, index, value, and gameOver values

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'"
      "value": "'"${VALUE}"'"
    },
    "over": "'"${GAMEOVER}"'"
  }
}'

echo
