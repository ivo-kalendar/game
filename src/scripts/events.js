
let player = require('./player.js')
let { moveRight, moveLeft, moveUp, moveDown } = require('./moveingFunctions')



exports.keydown = function(e) {
	// COMMANDS: RIGHT, LEFT, UP, DOWN 
	if (e.keyCode === 39 || e.keyCode === 102) { moveRight() }
	if (e.keyCode === 37 || e.keyCode === 100) { moveLeft() }
	if (e.keyCode === 38 || e.keyCode === 104) { moveUp() }
	if (e.keyCode === 40 || e.keyCode === 98) { moveDown() }
	// ALL FOUR ANGLE COMMANDS
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

exports.touchstart = function(e) {
	let client = {
		X: e.touches['0'].clientX,
		X_right: (canvas.width / 3) * 2,
		X_left: canvas.width / 3,
		Y: e.touches['0'].clientY,
		Y_up: canvas.height / 3,
		Y_down: (canvas.height / 3) * 2
	}

	if (client.X > client.X_right) { moveRight() }
	if (client.X < client.X_left) { moveLeft() }
	if (client.Y < client.Y_up) { moveUp() }
	if (client.Y > client.Y_down) { moveDown() }
}

exports.touchend = function(e) { if (e) { player.dx = 0; player.dy = 0 }}


