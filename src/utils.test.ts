import { toSentenceCase } from './utils';

describe('toSentenceCase', () => {
  const testCases = [
    { input: 'input-One', expectedOutput: 'Input One' },
    { input: 'input-Two', expectedOutput: 'Input Two' },
    { input: 'some-words-separated-by-dashes', expectedOutput: 'Some Words Separated By Dashes' },
    { input: '', expectedOutput: '' },
    { input: 'word', expectedOutput: 'Word' },
  ];

  testCases.forEach(({ input, expectedOutput }) => {
    it(`should convert "${input}" to "${expectedOutput}"`, () => {
      const actualOutput = toSentenceCase(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});