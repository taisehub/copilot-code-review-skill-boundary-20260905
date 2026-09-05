export function divide(total, count) {
  return total / count
}

export function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length
}
