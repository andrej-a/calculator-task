export const doCorrectValue = array => {
  console.log(array, 'ARG ARRAY')
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] === '(' && array[i + 1] === ')') {
      const firstPart = array.slice(0, i)
      console.log(firstPart, "FIRST PART")
      const secondPart = array.slice(i + 1)
      console.log(secondPart, 'SECOND')
      return doCorrectValue([...firstPart, array[i], ' * ', '1', ...secondPart])
    } else {
      continue
    }
  }
  return array
}
