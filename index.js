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
var checker = new DuplicateChecker()
console.log('Generating Random Array')
const randomArray = checker.generateRandomArray(arg)
console.log('Random Array:', randomArray)
console.log('Finding Duplicates')
console.log('Duplicates:', checker.findDuplicates(randomArray))
