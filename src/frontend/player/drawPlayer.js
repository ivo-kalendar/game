
let player = require('./player.js')
let ctx = player.ctx

exports.drawPlayer = function() {
	ctx.save()
	if (player.forward === true) {
		ctx.scale(1, 1)
		ctx.drawImage(player.image, player.x, player.y, player.w, player.h)
	}
	if (player.forward === false) { 
		ctx.scale(-1, 1)
		ctx.drawImage(player.image, -player.x, player.y, -player.w, player.h)
	}
	ctx.restore()
}