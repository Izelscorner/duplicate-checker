const chai = require('chai')
const expect = chai.expect
const DuplicateChecker = require('../js/duplicate-checker').DuplicateChecker

describe('DuplicateChecker', function () {

  describe('generateRandomArray()', function () {
    it('should have n + 1 items', function () {
      const n = 5
      const instance = new DuplicateChecker(n)
      const randomArray = instance.generateRandomArray()
      expect(randomArray).to.have.length(n + 1)
    })

    it('Values should be between 1 to n', function () {
      const n = 1000
      const instance = new DuplicateChecker(n)
      const randomArray = instance.generateRandomArray()

      expect(randomArray).to.satisfy(function (nums) {
        return nums.every(function (num) {
          return num >= 1 && num <= n
        })
      })
    })
  })

  describe('findDuplicates()', function () {
    it('to return expected result', function () {
      const arr = [2, 3, 3, 2]
      const instance = new DuplicateChecker(arr.len)
      const duplicates = instance.findDuplicates(arr)
      expect(duplicates).to.deep.equal([2, 3])
    })

    it('avoid priniting duplicates multiple time', function () {
      const arr = [1, 1, 1, 4, 5, 6, 7, 5] // 1 should be displayed only once
      const instance = new DuplicateChecker(arr.len)
      const duplicates = instance.findDuplicates(arr)
      expect(duplicates).to.deep.equal([1, 5])
    })
  })

  describe('full flow', function () {
    it('There should be one duplicate if n = 1', function () {
      const n = 1
      const instance = new DuplicateChecker(n)
      instance.generateRandomArray()
      const duplicates = instance.findDuplicates()
      expect(duplicates.length).to.equal(1)
    })

    it('Performance test for 10M million records', function () {
      // For performance check
      this.timeout(15000)
      const n = 1000 * 1000 * 10
      const instance = new DuplicateChecker(n)
      instance.generateRandomArray()
      const duplicates = instance.findDuplicates()
      expect(duplicates.length).to.greaterThan(0)
    })
  })
})
