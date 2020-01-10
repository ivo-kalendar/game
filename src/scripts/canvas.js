
let player = require('./player.js')
let ctx = player.ctx
let { keydown, keyup, click, mouseup } = require('./events.js')


update()

addEventListener('keydown', keydown)
addEventListener('keyup', keyup)
addEventListener('click', click)
addEventListener('mouseup', mouseup)



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

function drawPlayer() {
	ctx.drawImage(player.image, player.x, player.y, player.w, player.h)	
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

