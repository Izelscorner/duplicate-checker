const chai = require('chai')
const expect = chai.expect
const DuplicateChecker = require('../js/duplicate-checker').DuplicateChecker

describe('DuplicateChecker', function () {
  const instance = new DuplicateChecker()

  describe('generateRandomArray()', function () {
    it('should have n + 1 items', function () {
      const n = 5
      const randomArray = instance.generateRandomArray(n)
      expect(randomArray).to.have.length(n + 1)
    })

    it('values should be between 1 to n', function () {
      const n = 1000
      const randomArray = instance.generateRandomArray(n)

      expect(randomArray).to.satisfy(function (nums) {
        return nums.every(function (num) {
          return num >= 1 && num <= n
        })
      })
    })
  })

  describe('findDuplicates()', function () {
    it('return correct result', function () {
      const arr = [6, 6, 4, 3, 3, 1]
      const n = arr.length - 1
      const duplicates = instance.findDuplicates(arr)
      expect(duplicates).to.deep.equal([3, 6])
    })

    it('return expected result in ascending order', function () {
      const arr = [2, 3, 3, 2]
      const duplicates = instance.findDuplicates(arr)
      expect(duplicates).to.deep.equal([2, 3])
    })

    it('avoid priniting duplicates multiple time', function () {
      const arr = [1, 1, 1, 4, 5, 6, 7, 5] // 1 should be displayed only once
      const duplicates = instance.findDuplicates(arr)
      expect(duplicates).to.deep.equal([1, 5])
    })
  })

  describe('full flow', function () {
    it('there should be one duplicate if n = 1', function () {
      const n = 1
      const randomArray = instance.generateRandomArray(n)
      const duplicates = instance.findDuplicates(randomArray)
      expect(duplicates.length).to.equal(1)
    })

    it('performance test for 10M records', function () {
      // For performance check
      this.timeout(15000)
      const n = 1000 * 1000 * 10
      const randomArray = instance.generateRandomArray(n)
      const duplicates = instance.findDuplicates(randomArray)
      expect(duplicates.length).to.greaterThan(0)
    })
  })
})
