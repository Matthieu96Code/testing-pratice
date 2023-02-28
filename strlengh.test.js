const stringlengh = require('./strlgh')

test('properly reverse string', () => {
  // Arrange
  const str = 'hello'

  // Act
  const result = stringlengh('hello')

  // Assert
  expect(result).toBe(5)
})