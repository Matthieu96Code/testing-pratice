const stringlengh = require('./strlgh')

test('properly count string letters', () => {
  // Arrange
  const strOne = 'hello'
  const strTwo = ''
  const strThree = 'Hi'
  const strFour = 'Microverse, a remote sowftware development school'

  // Act
  const resultStrOne = stringlengh(strOne)
  const resultStrTwo = stringlengh(strTwo)
  const resultStrThree = stringlengh(strThree)
  const resultStrFour = stringlengh(strFour)

  // Assert
  expect(resultStrOne).toBe(5)
  expect(resultStrTwo).toBe(0)
  expect(resultStrThree).toBe(2)
  expect(resultStrFour).toBe(49)
})