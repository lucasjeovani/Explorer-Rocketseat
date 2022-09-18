//2
// import functionP, { date, greeting } from './utils.js'

// console.log(date, greeting('lucas'))
// functionP('Ludmila')

//3 - no caso trocando o 
//nome da variável sum que foi esportada pelo nome 'soma'
// import { sum as soma} from './utils.js'

// console.log(soma(2, 31))

/*4
(import * as) informa que está sendo importado multiplos, 
ou seja, está importando sum, multiply, divide e todos eles estão com o 
nome *calculator* */

import * as calculator from './utils.js'

console.log(calculator.sum(2,5))
console.log(calculator.divide(10,2))
console.log(calculator.subtract(10,2))
console.log(calculator.multiply(10,2))