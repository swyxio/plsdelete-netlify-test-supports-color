const chalk = require('chalk')

console.log(chalk.blue('this is blue'))
console.log(`supportsColor: ${JSON.stringify(chalk.supportsColor)}`)

process.env.colors = true

console.log(chalk.yellow('this is yellow'))
console.log(`supportsColor: ${JSON.stringify(chalk.supportsColor)}`)
