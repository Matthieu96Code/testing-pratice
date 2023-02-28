const stringlengh = (str) => {
  if (str > 1 && str <= 10) {
    return str.length
  } else {
    throw Error('error found')
  }
}

module.exports = stringlengh
