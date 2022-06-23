function range(start: number, end: number, step: number = 1): number[] {
  const result = []

  for (let i = start; i <= end; i += step) {
    result.push(i)
  }

  return result
}

export default range
