
// This duplicate checker runs on O(n) time compexity and O(n) Auxiliary Space.
// For performance improvement it uses Typed Arrays (ES6) for browser compatibility please check https://caniuse.com/#search=Int32Array
// For linting I used standartd JS , this is why there won't be trailing semi columns at the end of lines.
// Default value for N is 1,000,000.
class DuplicateChecker {
  constructor (n = (1000 * 1000)) {
    this.min = 1
    this.max = n
    this.arrSize = n + 1
    this.arr = new Int32Array(this.arrSize)
  }
  // Generate a random array
  generateRandomArray (arrSize = this.arrSize, min = this.min, max = this.max) {
    for (let i = 0; i <= arrSize; i++) {
      this.arr[i] = Math.floor(Math.random() * (max - min + 1)) + min // Generates random values between min - max
    }
    return this.arr
  }
  // Finding duplicates in an array
  findDuplicates (arr = this.arr) {
    let counts = new Int32Array(arr.length) // Note: JS Object can be used as well 'let counts = {}', I picked array because values are integer.
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
    return duplicates.sort((a, b) => a - b)
  }
}

module.exports = { DuplicateChecker }
