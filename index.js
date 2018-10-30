const DuplicateChecker = require('./js/duplicate-checker').DuplicateChecker

// Aplication Main entry
const args = process.argv.slice(2)
let arg

args.forEach(function (val, index, array) {
  if (index === 0) {
    arg = parseInt(val)
  }
})

// Create an instance with parameter
var checker = new DuplicateChecker(arg)
console.log('Generation Random Array')
console.log('Random Array:', checker.generateRandomArray())
console.log('duplicate checker is runnig.')
console.log('Duplicates:', checker.findDuplicates())
