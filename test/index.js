const {default: Lampkit} = require('..')
const rest = new Lampkit();

rest.get.members().then(console.log)
console.log(rest.get.leaderboard)