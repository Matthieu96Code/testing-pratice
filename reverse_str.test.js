const stringlengh = require('./reverse_str')

test('properly count string letters', () => {
  // Arrange
  const strOne = 'hello microverse!'

  // Act
  const resultStrOne = stringlengh(strOne)

  // Assert
  expect(resultStrOne).toBe('esrevorcim olleh')
})