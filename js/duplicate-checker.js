
// This duplicate checker runs on O(n) time compexity and O(n) Auxiliary Space.
// For performance improvement it uses Typed Arrays (ES6) for browser compatibility please check https://caniuse.com/#search=Int32Array
// For linting I used standartd JS , this is why there won't be trailing semi columns at the end of lines.
// Default value for N is 1,000,000.
class DuplicateChecker {
  constructor(){
      console.log('Duplicate Checker instance created.')
  }
  // Generate a random array
  generateRandomArray (n = (1000 * 1000)) {
    const min = 1
    const max = n
    const arrSize = n + 1      
    let arr = new Int32Array(arrSize)
    for (let i = 0; i <= arrSize; i++) {
      arr[i] = Math.floor(Math.random() * (max - min + 1)) + min // Generates random values between min - max
    }
    return arr
  }
  // Finding duplicates in an array
  findDuplicates (arr, sorted = true) {
    let counts = new Int32Array(arr.length+1) // Note: JS Object can be used as well 'let counts = {}', I picked array because values are integer.
    let duplicates = []
    for (let i = 0; i < arr.length; i++) {
      // Lookup time/access time is O(1)
      if (counts[arr[i]] === undefined) {
        counts[arr[i]] = 1
      } else {
        counts[arr[i]]++
        // (Edge Case) To avoid priniting duplicates multiple time.
        // For instance [1,3,3,4,5,6,3] it will print 3 two times.
        if (counts[arr[i]] === 2) duplicates.push(arr[i]) // This means for the first time we are running into duplicate for this value.
      }
    }

    if(sorted) {
        return duplicates.sort((a, b) => a - b) //Ascending sorting duplicate array
    } else {
        return duplicates
    }

  }
}

module.exports = { DuplicateChecker }
