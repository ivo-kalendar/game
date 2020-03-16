
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


module.exports = {
	ctx: canvas.getContext('2d'),
	image: document.getElementById('image'),
	x: canvas.width / 2 - 50,
	y: canvas.height / 2 - 75,
	w: 150,
	h: 125,
	speed: 10,
	dx: 0,
	dy: 0,
	forward: true
}

