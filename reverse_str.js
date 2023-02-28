const reverseStr = (str) => {
  let output = str.split("")
  output.reverse()
  output = output.join("")

  return output
}

module.exports = reverseStr
