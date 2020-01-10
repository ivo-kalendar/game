
let player = require('./player')
let ctx = player.ctx
let { keydown, keyup } = require('./events')
let { drawPlayer } = require('./drawPlayer')


update()
addEventListener('keydown', keydown)
addEventListener('keyup', keyup)

function update() {
	clear()
	drawPlayer()
	newPosition()
	walls()
	requestAnimationFrame(update)
}


function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPosition() {
	player.x += player.dx
	player.y += player.dy
}

function walls() {
	if (player.x <= -50) {player.x = -50}
	if (player.x >= canvas.width - 80) {player.x = canvas.width - 80}
	if (player.y <= -50) {player.y = -50}
	if (player.y >= canvas.height - 80) {player.y = canvas.height - 80}
}

