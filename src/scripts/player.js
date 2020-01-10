
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


module.exports = {
	image: document.getElementById('image'),
	ctx: canvas.getContext('2d'),
	x: canvas.width / 2 - 50,
	y: canvas.height / 2 - 75,
	w: 150,
	h: 125,
	speed: 19,
	dx: 0,
	dy: 0
}

