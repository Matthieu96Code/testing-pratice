const capitalize = require('./capitalize')

test('properly capitalize first letter of string', () => {
  // Arrange
  const strOne = 'happy coding!'

  // Act
  const resultStrOne = capitalize(strOne)

  // Assert
  expect(resultStrOne).toBe('Happy coding!')
})