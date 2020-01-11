
import express from 'express'
import path from 'path'

const server = express()

const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const PORT = process.env.PORT || 3000

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

const staticMiddleware = express.static('dist')
server.use(staticMiddleware)

server.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}...`)
})

