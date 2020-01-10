
let player = require('./player.js')


exports.keydown = function(e) {
	if (e.keyCode === 39) { player.dx = player.speed }
	if (e.keyCode === 37) { player.dx = -player.speed }
	if (e.keyCode === 38) { player.dy = -player.speed }
	if (e.keyCode === 40) { player.dy = player.speed }
}

exports.keyup = function(e) {
	if (e.keyCode === 39 || e.keyCode === 37) { player.dx = 0 }
	if (e.keyCode === 38 || e.keyCode === 40) { player.dy = 0 }
}

exports.click = function(e) {
	console.log(e)
}

exports.mouseup = function(e) {
	if (e) { player.dx = 0; player.dy = 0 }
}
