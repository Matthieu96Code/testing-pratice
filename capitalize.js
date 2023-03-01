const capitalize = (str) => {
  let output = str.split("")
  output[0] = output[0].toUpperCase()
  output = output.join("")
  return output
}
module.exports = capitalize
