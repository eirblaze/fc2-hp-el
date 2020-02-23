import tsSample from '../jest-sample/ts-sample'

test('adds 1 + 2 to equal 3', () => {
  const I_jestSampleTS = new tsSample
  expect(I_jestSampleTS.sum(1, 2)).toBe(3)
  expect(I_jestSampleTS.sum(1, 2, 3)).toBe(6)
})
