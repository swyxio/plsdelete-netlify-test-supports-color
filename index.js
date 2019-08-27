process.env.FORCE_COLOR = true
process.env.colors = true
const chalk = require('chalk')

console.log(chalk.blue('this is blue'))
console.log(`supportsColor: ${JSON.stringify(chalk.supportsColor)}`)

console.log(chalk.yellow('this is yellow'))
console.log(`supportsColor: ${JSON.stringify(chalk.supportsColor)}`)
