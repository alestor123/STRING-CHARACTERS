#!/usr/bin/env node
const stringChar = require('./App')
const { readFileSync } = require('fs')
const chalk = require('chalk')

try {
  console.log(stringChar(readFileSync(process.argv[2]).toString()).sort().join())
} catch (e) {
  console.log(chalk.redBright.bold('Oops : ' + e.message))
}
