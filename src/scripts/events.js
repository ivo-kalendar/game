
let player = require('./player.js')


exports.keydown = function(e) {
	if (e.keyCode === 39 || e.keyCode === 102) { player.dx = player.speed; player.forward = true }
	if (e.keyCode === 37 || e.keyCode === 100) { player.dx = -player.speed; player.forward = false }
	if (e.keyCode === 38 || e.keyCode === 104) { player.dy = -player.speed }
	if (e.keyCode === 40 || e.keyCode === 98) { player.dy = player.speed }
	if (e.keyCode === 105) { player.dx = player.speed;  player.dy = -player.speed; player.forward = true } 
	if (e.keyCode === 103) { player.dx = -player.speed;  player.dy = -player.speed; player.forward = true } 
	if (e.keyCode === 99) { player.dx = player.speed;  player.dy = player.speed; player.forward = true } 
	if (e.keyCode === 97) { player.dx = -player.speed;  player.dy = player.speed; player.forward = true } 
}

exports.keyup = function(e) {
	if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 102 || e.keyCode === 100) { player.dx = 0 }
	if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 104 || e.keyCode === 98) { player.dy = 0 }
	if (e.keyCode === 105 || e.keyCode === 103 || e.keyCode === 99 || e.keyCode === 97) { player.dx = 0; player.dy = 0 }
}


