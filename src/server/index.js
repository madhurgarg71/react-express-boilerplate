const express = require('express')
const chalk = require('chalk')
const middleWare = require('./middleWare')
const YourServer = require('./your-server')

function init() {
  const yourApp = express()
  console.log(chalk.blue('Your server initialised...'))

  middleWare(yourApp)

  yourApp.use((req, res, next) => {
    console.log(chalk.dim('%s %s'), req.method, req.url)
    next()
  })
  return new YourServer(yourApp)
}

module.exports = init
