
let player = require('./player.js')

exports.moveRight = () => { player.dx = player.speed; player.forward = true }
exports.moveLeft = () => {  player.dx = -player.speed; player.forward = false }
exports.moveUp = () => { player.dy = -player.speed }
exports.moveDown = () => { player.dy = player.speed }