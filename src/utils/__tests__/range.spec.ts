import { describe, it, expect } from 'vitest'
import range from '../range'

describe('range function', () => {
  it('should return an array of numbers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(range(2, 7, 2)).toEqual([2, 4, 6])
  })

  it('should return an empty array if start is greater than end', () => {
    expect(range(5, 1)).toEqual([])
  })
})
