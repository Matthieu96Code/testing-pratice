const stringlengh = (str) => {
  if (str.length > 1 && str.length <= 10) {
    return str.length
  } else {
    throw Error('error found')
  }
}

module.exports = stringlengh
