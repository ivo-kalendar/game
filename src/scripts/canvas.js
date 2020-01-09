
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let player = {
	x: canvas.width / 2 - 50,
	y: canvas.height / 2 - 75,
	w: 150,
	h: 125,
	speed: 4,
	dx: 0,
	dy: 0,
	image: document.getElementById('image')
}


function drawPlayer() {
	ctx.drawImage(player.image, player.x, player.y, player.w, player.h)
	
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPosition() {
	player.x += player.dx
	player.y += player.dy
}

function update() {
	clear()

	drawPlayer()

	newPosition()

	requestAnimationFrame(update)
}

update()