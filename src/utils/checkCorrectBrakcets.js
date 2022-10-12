export const checkCorrectBrakcets = string => {
  const chars = string.split('')
  const stack = []
  const open = ['(']
  const close = [')']
  let closeIndex
  let openIndex

  for (let i = 0; i < chars.length; i++) {
    openIndex = open.indexOf(chars[i])
    if (openIndex !== -1) {
      stack.push(openIndex)
      continue
    }

    closeIndex = close.indexOf(chars[i])
    if (closeIndex !== -1) {
      openIndex = stack.pop()
      if (closeIndex !== openIndex) {
        return false
      }
    }
  }

  if (stack.length !== 0) {
    return false
  }

  return true
}
