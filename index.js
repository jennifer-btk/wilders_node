
const chalk = require('chalk');

let names = ['Name1', 'Name2', 'Name3'];
let colors = [chalk.blue, chalk.white, chalk.red];


for (let i = 0; i < names.length; i++) {
	console.log(colors[i](names[i]));
}


/* Je suis un commentaire

console.log(chalk.blue('Héléna'));
console.log(chalk.white('Madeline'));
console.log(chalk.red('Martin'));
 */