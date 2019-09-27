curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data ''
